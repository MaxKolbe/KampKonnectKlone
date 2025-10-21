import "./Navbar.css"
import { NavLink } from "react-router-dom"
import LOGO from "../../assets/LOGO.png"
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const toggleMenu = () => {
        setToggle(!toggle)
    }

    return(
        <nav className="myContainer">
            <img src={LOGO} alt="logo" className="logo"/>
            <ul className={toggle ? " " : "hide"}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "nav-link"}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : "nav-link"}>About</NavLink></li>
                <li><NavLink to="/kampinfo" className={({ isActive }) => isActive ? "active" : "nav-link"}>Kamp Info</NavLink></li>
                <li><NavLink to="/faq" className={({ isActive }) => isActive ? "active" : "nav-link"}>FAQ</NavLink></li>
                <li><NavLink to="/volunteer" className={({ isActive }) => isActive ? "active" : "nav-link"}>Volunteer</NavLink></li>
                <li><NavLink to="/participate" className={({ isActive }) => isActive ? "active" : "nav-link"}>Participate</NavLink></li>
                <li><NavLink to="/donate" className={({ isActive }) => isActive ? "active" : "nav-link"}>Donate</NavLink></li>
            </ul>
            {
                toggle ? <IoMdClose className="hamburger" onClick={toggleMenu}/> :
                <IoMdMenu className="hamburger" onClick={toggleMenu}/> 
            }
             
        </nav>
    )
}

export default Navbar