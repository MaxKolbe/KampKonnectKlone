import "./Volunteerroles.css"
import Voluntitle from "./Voluntitle"
import { FiCalendar } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";

const Volunteerroles =()=>{
    return(
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
    )
}

export default Volunteerroles