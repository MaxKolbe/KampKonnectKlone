import "./Volunteer.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Volunteerhero from "./Volunteerhero"
import Volunteerroles from "./Volunteerroles"
import Volunteerregistration from "./Volunteerregistration"
import Volunteerbenefits from "./Volunteerbenefits"
import Volunteercommunity from "./Volunteercommunity"
import Volunteerregisterform from "./Volunteerregisterform"

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
        {/* Hero */}
        <Volunteerhero/>
        {/* Roles */}
        <Volunteerroles/>
        {/* Registration */}
        <Volunteerregistration/>
        {/* Benefits */}
        <Volunteerbenefits />
        {/* Community */}
        <Volunteercommunity/>
        {/* Register */}
        <Volunteerregisterform/>
        <Footer />
        </>
    )
}

export default Volunteer