import "./Activity.css"
import Herotitle from "./Herotitle"
import { useState, useEffect, useRef } from "react"
import { PiForkKnifeLight } from "react-icons/pi"
import { PiPenNibLight } from "react-icons/pi"
import { LuScissors } from "react-icons/lu"

const Activity = () => {

const cards = [
  { id: 1, econ: <PiForkKnifeLight style={{color: "var(--pink-main)", margin: "0 auto", fontSize: "2.4rem"}}/>, title: "Bake Lab: Science Meets Sweets", text: "You'll explore the fun (and tasty) world of baking while learning the 'why' behind what makes cakes rise and cookies perfect. Come ready to experiment, decorate, and of course… eat your creations!" },
  { id: 2, econ: <LuScissors style={{margin: "0 auto", fontSize: "2.4rem"}}/>, title: "The Art of Hair Styling", text: "Learn professional hair styling techniques from real experts. Discover how to enhance natural beauty, express creativity, and maybe even spark a future career in beauty and fashion! Perfect for budding stylists and anyone who wants to make their creativity shine: one braid, twist, and curl at a time." },
  { id: 3, econ: <PiPenNibLight style={{color: "var(--pink-main)", margin: "0 auto", fontSize: "2.4rem"}}/>, title: "Storytelling: Crafting Stories that Stick", text: "Do you love making things sound exciting? Ever wanted to write like the people behind your favourite ads or viral social posts? In this track, you'll learn how to turn everyday things—brands, products, even yourself—into compelling stories that stand out. Perfect for future content creators, marketers or anyone who wants to grab attention with their words. Bonus: You'll also sharpen the skills needed to tackle university application prompts, learning how to tell your story in a way that's clear, authentic, and unforgettable." },
]

const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const cardCount = cards.length

  // Go to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cardCount)
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cardCount) % cardCount)
  }

  // Auto-slide every 3 seconds
  useEffect(() => {
    //an excuse to call setInterval in useeffect (the right way?) and clean up immediately after
    intervalRef.current = setInterval(nextSlide, 10000)
    return () => clearInterval(intervalRef.current!)
  })

  // Handle swipe on touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const swipeThreshold = 50; // minimum px to count as a swipe

    if (distance > swipeThreshold) nextSlide()
    if (distance < -swipeThreshold) prevSlide()

    setTouchStart(null)
    setTouchEnd(null)
  }
  
  return(
    <div className="activity">
      <div className="active1">
        <Herotitle heading={"Activity Tracks for 2025"} subHeading={"Explore our exciting activity tracks for the upcoming camp"} />
      </div>
      <div className="activity-navigation">
        <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
        <div className="carousel" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          {/* Card Container */}
          <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {cards.map((card) => (
              <div className="carousel-card" key={card.id}>
                <h2>{card.econ}</h2>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>  
        <button className="carousel-btn next" onClick={nextSlide}>›</button>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "activedot" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Activity 