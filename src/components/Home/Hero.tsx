import "./Hero.css"
import { Link } from "react-router-dom"
import KAMP_KONNECT_GROUP from "../../assets/KAMP-KONNECT-GROUP.jpg"
import { FiCalendar } from "react-icons/fi";
import { LuAnchor } from "react-icons/lu";

const Hero = () => {
    const kampdetails: string[] = [
        "12th - 20th August 2025",
        "Theme: Anchored in Hope"
    ]

    return(
        <div className="myContainer hero">
            <div className="hero-1">
                <h1>Kamp Konnect</h1>
                <p>A week-long leadership and cultural experience for girls entering SS1 through SS3 (Years 10-12) in Lagos, Nigeria.</p>
                <ul>
                    <li><Link to="/participate" className="btn hbtn">Register Now</Link></li>
                    <li><Link to="/about" className="btn-light hbtn">Learn More</Link></li>
                </ul>
            </div>
            <div className="hero-2">
                <div className="img-ath-up">
                    <img src={KAMP_KONNECT_GROUP} alt="hero-image" />
                    <div className="img-ath">
                        <p style={{display: "flex", alignItems: "center", marginBottom: ".4rem"}}><FiCalendar  style={{color: "#db2777", fontSize: "1.2rem", marginRight: ".4rem"}}/>{kampdetails[0]}</p>
                        <p style={{display: "flex", alignItems: "center"}}><LuAnchor  style={{fontSize: "1.2rem", marginRight: ".4rem"}}/>{kampdetails[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero