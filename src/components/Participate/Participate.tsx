import "./Participate.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { BsFillPersonXFill } from "react-icons/bs"
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Participate = () => {
    return(
        <>
        <Navbar />
            <div className="participateTitle">
                <div className="participateBody">
                    <h1>Kamp Konnect 2025</h1>
                    <div className="colorBarReverse"></div>
                </div>
                {/* IS REGISTRATION OPEN? */}
                <div className="regStatus">
                    <BsFillPersonXFill className="regStatusIcon" />
                    <h4>Registration is Currently Closed</h4>
                </div>

                {/* NEXT YEAR? */}
                <form action="" className="nyForm">
                    <FaRegHeart className="nyIcon"/>
                    <h4>Interested in Next Year?</h4>
                    <p>Be the first to know when registration opens for Kamp Konnect 2026! Submit your information below and we'll notify you as soon as registration becomes available.</p>
                    <label htmlFor="">Parent's Primary Contact Email Address *</label>
                    <input type="text" name="" id="" placeholder="parent@example.com"/>
                    <label htmlFor="">Parent/Guardian Full Name *</label>
                    <input type="text" name="" id="" placeholder="Parent/Guardian Full Name" />
                    <label htmlFor="">Contact Number (Parent/Guardian) *</label>
                    <input type="text" name="" id="" placeholder="e.g. +234 XXX XXX XXXX" />
                    <span className="nyFormSpan" style={{fontSize: ".8rem"}}>Include country code</span>
                    <button className="btn-reverse" style={{width: "100%"}}> <MdOutlineEmail/> Submit Interest</button>
                </form>

                {/* STAY CONNECTED */}
                <div className="stayConnected">
                    <h6>Stay Connected</h6>
                    <p>Follow us on social media for camp updates, highlights from previous years, and announcements about next year's registration.</p>
                    <div className="stayConBtn">
                        <a href="" className="stayConBtn">Follow on Instagram</a>
                        <a href="" className="stayConBtn">Like on Facebook</a>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default Participate