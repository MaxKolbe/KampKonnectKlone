import "./Volunteer.css"
import Voluntitle from "./voluntitle"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import VOLHERO from "../../assets/VOLHERO.jpg"
import { Link } from "react-router-dom"
import { FiCalendar } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
// import Title from "../Title"

const Volunteer = () => {
    return(
        <>
        <Navbar />
        {/* title */}
        <div className="volunteerTitle">
            <div className="volunteerBody">
                <h1>Volunteer With Us</h1>
                <div className="colorBar"></div>
                <p>Join our team of dedicated volunteers and make a difference in the lives of young girls.</p>
            </div>
        </div>

        {/* hero */}
        <div className="volunteerHero">
            <div className="vh1">
                <img src={VOLHERO} alt="Volunteer hero image" />
            </div>
             <div className="vh2">
                <h1>Want to join our awesome team of volunteers?</h1>
                <p>Our volunteers are the heart of Kamp Konnect. They bring their skills, passion, and energy to create an unforgettable experience for our campers. Whether you're a professional in your field or simply have a passion for mentoring young girls, we'd love to have you on our team.</p>
                <Link to="/" className="btn">Regsiter as a Volunteer</Link>
            </div>
        </div>

        {/* Roles */}
        <div className="volunterRoles">
           <div className="volunteerRolesHeader">
                <Voluntitle heading={"Volunteer Roles"} subHeading={"There are many ways you can contribute your skills and time to make Kamp Konnect a success."}/>
           </div>
           <div className="volunteerRolesLists">
                <div className="volunteerRolesList">
                    <FaRegStar  className="volunteerRolesIcons"/>
                    <h1>Leaders</h1>
                    <p>Lead specialized tracks and workshops in your area of expertise, such as cooking, music production, or hair styling.</p>
                </div>
                <div className="volunteerRolesList" style={{border: "1px solid #E9D5FF"}}>
                    <GoPeople  className="volunteerRolesIcons" style={{color: "#A957F7"}}/>
                    <h1 style={{color: "#A957F7"}}>Mentors</h1>
                    <p>Guide a small group of campers throughout the week, providing support, encouragement, and mentorship.</p>
                </div>
                <div className="volunteerRolesList">
                    <FiCalendar className="volunteerRolesIcons"/>
                    <h1>Coordinators</h1>
                    <p>Help plan and execute special events, field trips, and daily activities throughout the camp.</p>
                </div>
           </div>
        </div>

        {/* Registration */}
        <div className="volunteerRegistration">
            <div className="volunteerRegistrationHeader">
                <Voluntitle heading="Volunteer Registration" subHeading="Fill out the form below to register as a volunteer for Kamp Konnect 2025."/>
            </div>
            <div className="volunteerRegistrationForm">
                <div className="volunteerRegistrationFormChild">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecUOkv2srGl2PjkRm02uHSQX9ZMAygzp0-w3wpYdnbT9tt8Q/viewform?embedded=true" height="3400">Loading…</iframe>
                    <span>If the form doesn't load, you can also <a href="">access it directly here.</a></span>
                </div>
            </div>
        </div>
        
        {/* Benefits */}
        <div className="benefits">
            <div className="benefitsHeader">
                <Voluntitle heading="Benefits of Volunteering"/>
            </div>
            <div className="benefitsGrid">
                <div className="bgrid">
                    <h4>Make a Difference</h4>
                    <p>Directly impact the lives of young girls by helping them develop skills and confidence.</p>
                </div>
                <div className="bgrid">
                    <h4>Professional Development</h4>
                    <p>Gain valuable leadership and mentoring experience that enhances your professional skills.</p>
                </div>
                <div className="bgrid">
                    <h4>Community Building</h4>
                    <p>Connect with like-minded individuals who are passionate about youth development.</p>
                </div>
                <div className="bgrid">
                    <h4>Personal Growth</h4>
                    <p>Experience the joy and fulfillment that comes from giving back and serving others.</p>
                </div>
            </div>
        </div>

         {/* Community */}
        <div className="volunterrCommunity">
            <div className="volunterrCommunityHeader">
                <Voluntitle heading="Volunteer Registration" subHeading="Fill out the form below to register as a volunteer for Kamp Konnect 2025."/>
            </div>
            <div className="vcGrid">
                <div className="vcrid">
                    <img src="" alt="vcrid" />
                </div>
                <div className="vcrid">
                    <img src="" alt="vcrid" />
                </div>
                <div className="vcrid">
                    <img src="" alt="vcrid" />
                </div>
                <div className="vcrid">
                    <img src="" alt="vcrid" />
                </div>
            </div>
        </div>

        {/* Register */}
        <div className="volunteerRegisterForm">
           <div className="minVolunteerRegisterForm">
                 <h1>Ready to Make a Difference?</h1>
                <p>Join our volunteer team today and help shape the future of young girls in Nigeria.</p>
                <Link to="" className="btn-light">Register as a Volunteer</Link>
           </div>
        </div>
        <Footer />
        </>
    )
}

export default Volunteer