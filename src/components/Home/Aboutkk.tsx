import "./Aboutkk.css"
import Herotitle from "./Herotitle"
import { Link } from "react-router-dom"
import { LuArrowRight } from "react-icons/lu";

const Aboutkk = () => {

    return(
        <div className="myContainer aboutkk">
            <Herotitle heading={"About Kamp Konnect"}  />
            <br />
            <p>Kamp Konnect is a week-long leadership and cultural experience held in Lagos for girls entering SS1 through SS3 (Years 10–12). Through a carefully curated series of activities, participants will not only acquire practical skills and have fun, but also be inspired to become agents of change in their communities, homes, schools, and society at large.</p>
            <br />
            <p>Each participant selects a specialised track where she learns a specific skill, while also collaborating with others from different tracks on a team project. Spiritual activities during the camp will be provided by Opus Dei, a personal prelature of the Catholic Church. The programme is open to all qualified applicants, regardless of creed or religion.</p>
            <br />
            <Link to="/kampinfo" className="btn">Learn More <LuArrowRight/></Link>
        </div>
    )
}

export default Aboutkk 