import "./Footer.css"
import { NavLink } from "react-router-dom"
import { FaInstagram, FaTiktok} from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const Footer = () => {

    return (
        <footer className="myContainer">
            <div className="ft-1">
                <div className="col-1">
                    <h1>Kamp Konnect</h1>
                    <p>A week-long leadership and cultural experience for girls entering SS1 through SS3 (Years 10-12)</p>
                    <div style={{display:"flex"}}><FaInstagram className="icn"/> <FaTiktok  className="icn"/></div>
                </div>
                <div className="col-2">
                    <h1>Contact Us</h1>
                    <ul>
                        <li style={{display:"flex"}}><GrLocation className="icn"/> Lagos, Nigeria</li>
                        <li style={{display:"flex"}}><FiPhone className="icn"/> 07039407724, 08065295038 <br /> 08038505621, 08034308189</li>
                        <li style={{display:"flex"}}><AiOutlineMail className="icn"/> kampkonnect@gmail.com</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><NavLink to="/kampinfo"  className={({ isActive }) => isActive ? "" : ""}>Kamp Info</NavLink></li>
                        <li><NavLink to="/volunteer" className={({ isActive }) => isActive ? "" : ""}>Volunteer</NavLink></li>
                        <li><NavLink to="/participate" className={({ isActive }) => isActive ? "" : ""}>Participate</NavLink></li>
                        <li><NavLink to="/donate" className={({ isActive }) => isActive ? "" : ""}>Donate</NavLink></li>
                    </ul> 
                </div>
            </div>
            <div className="ft-2">
                <hr />
                <p>© 2025 Kamp Konnect. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer 