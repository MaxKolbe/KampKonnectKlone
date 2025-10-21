import "./Stats.css"
import { FiCalendar } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Stats = () => {

    return(
        <div className="myContainer stats">
            <div className="stat">
                <GoPeople className="i-con" />
                <h1>45</h1>
                <p>Happy Campers</p>
            </div>
            <div className="stat statb">
                <FiCalendar className="i-con stati"/>
                <h1>9</h1>
                <p>Days of Growth</p>
            </div>
            <div className="stat">
                <FaRegStar className="i-con"/>
                <h1>1:1</h1>
                <p>Mentoring</p>
            </div>
            <div className="stat statb">
                <GrLocation className="i-con stati"/>
                <h1>3</h1>
                <p>Skill Tracks</p>
            </div>
        </div>
    )
}

export default Stats 