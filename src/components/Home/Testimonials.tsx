import Herotitle from "./Herotitle"
import "./Testimonials.css"
import { useState, useEffect, useRef } from "react"

const Testimonials = () => {

const cards = [
  { id: 1, text: "I was inspired to try new things and faced my fears which had a wonderful outcome." },
  { id: 2, text: "I remember when I first came here, so quiet and reserved but the volunteers were so kind and heartwarming, which helped me gain more confidence and I really can't wait for next year." },
  { id: 3, text: "More fun people come together from different states and we have a bonding time with each other." },
  { id: 4, text: "The quest for my cabin, Hibiscus to get first. Winning best cabin really meant a lot to us and working towards it brought us together and we got to know more about each other. We were able support and look out for our cabin members and bonded alot." },
  { id: 5, text: "Beyond the people, I appreciated how the daily activities affirmed my belief that with proper planning, you can achieve so much in a day. I took this lesson back to school with me. Most importantly, amidst all the physical exertion, we never neglected prayer time at the chapel, attending Mass, or meditation. No matter how tired or overwhelmed we felt, there was always time to turn to Jesus. I cherished every moment of it." },
]

  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const cardCount = cards.length

  // Go to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cardCount)
  }

  // Go to previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cardCount) % cardCount)
  }

  // Auto-slide every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 10000) //an excuse to call setInterval in useeffect and clean up immediately after
    return () => clearInterval(intervalRef.current!)
  })

  // Handle swipe on touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const swipeThreshold = 50 // minimum px to count as a swipe

    if (distance > swipeThreshold) nextSlide()
    if (distance < -swipeThreshold) prevSlide()

    setTouchStart(null)
    setTouchEnd(null)
  }

    return(
       <div className="testimonials">
            <div className="testimonial">
                <Herotitle heading="What Our Campers Say" />
            </div>
            <div className="carouselt" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                {/* Card Container */}
                <div className="carouselt-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {cards.map((card) => (
                    <div className="carouselt-card" key={card.id}>
                        <p style={{fontStyle: "italic"}}>&quot;{card.text}&quot;</p>
                    </div>
                ))}
                </div>
            </div>  
            
            {/* Navigation */}
            <div className="slide-navigation">
                <button className="carouselt-btn prev" onClick={prevSlide}>‹</button>
                {/* Dots */}
                <div className="carouselt-dots">
                    {cards.map((_, index) => (
                        <span key={index} className={`dott ${index === current ? "activedott" : ""}`} onClick={() => setCurrent(index)}/>
                    ))}
                </div>
              <button className="carouselt-btn next" onClick={nextSlide}>›</button>
            </div>
       </div>
    )
}

export default Testimonials 
