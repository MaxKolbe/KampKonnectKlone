import "./Volunteerregisterform.css"
import { Link } from "react-router-dom"

const Volunteerregisterform = () => {

    return(
         <div className="volunteerRegisterForm">
           <div className="minVolunteerRegisterForm">
                 <h1>Ready to Make a Difference?</h1>
                <p>Join our volunteer team today and help shape the future of young girls in Nigeria.</p>
                <Link to="" className="btn-light">Register as a Volunteer</Link>
           </div>
        </div>
    )
}

export default Volunteerregisterform