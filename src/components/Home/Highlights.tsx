import "./Highlights.css"
import { useState, useEffect, useRef } from "react"
import GAL1 from "../../assets/GAL1.jpg"
import GAL2 from "../../assets/GAL2.jpg"
import GAL3 from "../../assets/GAL3.jpg"
import GAL4 from "../../assets/GAL4.jpg"
import GAL5 from "../../assets/GAL5.jpg"
import GAL6 from "../../assets/GAL6.jpg"
import GAL7 from "../../assets/GAL7.jpg"
import GAL8 from "../../assets/GAL8.jpg"
import GAL9 from "../../assets/GAL9.jpg"
import GAL10 from "../../assets/GAL10.jpg"
import GAL11 from "../../assets/GAL11.jpg"
import GAL12 from "../../assets/GAL12.jpg"
import GAL13 from "../../assets/GAL13.jpg"
import GAL14 from "../../assets/GAL14.jpg"
import GAL15 from "../../assets/GAL15.jpg"
import GAL16 from "../../assets/GAL16.jpg"

const Highlights = () => {
  const [current, setCurrent] = useState(1)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const cardCount = 4

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
    intervalRef.current = setInterval(nextSlide, 20000) //an excuse to call setInterval in useeffect and clean up immediately after
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
        <div className="highlights">
           <h2 className="highlight">Highlights from Last Year</h2>
           <div className="highlights-navigation">
             <button className="carouselh-btn prevh" onClick={prevSlide}>‹</button>
            <div className="carouselh" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                {/* Card Container */}
                <div className="carouselh-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                    <div className="carouselh-card" >
                     <div className="card-slice">
                        <img src={GAL1} alt="Girls"/>
                        <img src={GAL2} alt="Girls"/>
                        <img src={GAL3} alt="Girls"/>
                        <img src={GAL4} alt="Girls"/>
                      </div>
                    </div>
                    <div className="carouselh-card" >
                      <div className="card-slice">
                        <img src={GAL5} alt="Girls"/>
                        <img src={GAL6} alt="Girls"/>
                        <img src={GAL7} alt="Girls"/>
                        <img src={GAL8} alt="Girls"/>
                      </div>
                    </div>
                    <div className="carouselh-card" >
                      <div className="card-slice">
                        <img src={GAL9}  alt="Girls"/>
                        <img src={GAL10} alt="Girls"/>
                        <img src={GAL11} alt="Girls"/>
                        <img src={GAL12} alt="Girls"/>
                      </div>
                    </div>
                    <div className="carouselh-card" >
                      <div className="card-slice">
                        <img src={GAL13} alt="Girls"/>
                        <img src={GAL14} alt="Girls"/>
                        <img src={GAL15} alt="Girls"/>
                        <img src={GAL16} alt="Girls"/>
                      </div>
                    </div>
                </div>
            </div>  
            <button className="carouselh-btn nexth" onClick={nextSlide}>›</button>
           </div>
            
            <div className="slideh-navigation">
                {/* Dots */}
                <div className="carouselh-dots">
                  <span className={`doth ${1 === current ? "activedoth" : ""}`} onClick={() => setCurrent(1)}/>
                  <span className={`doth ${2 === current ? "activedoth" : ""}`} onClick={() => setCurrent(2)}/>
                  <span className={`doth ${3 === current ? "activedoth" : ""}`} onClick={() => setCurrent(3)}/>
                  <span className={`doth ${0 === current ? "activedoth" : ""}`} onClick={() => setCurrent(4)}/>
                </div>
            </div>
        </div>
    )
}

export default Highlights 