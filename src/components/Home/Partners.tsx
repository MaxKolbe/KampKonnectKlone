import "./Partners.css"
import Herotitle from "./Herotitle"
import PART1 from "../../assets/PART1.png"
import PART2 from "../../assets/PART2.png"
import PART3 from "../../assets/PART3.jpg"
import PART4 from "../../assets/PART4.png"
import PART5 from "../../assets/PART5.png"
const Partners = () => {

    return(
        <div className="myContainer partners">
           <div className="part1">
                 <Herotitle heading="Our Partners" subHeading="We organize this program in partnership with leading educational institutions that share our commitment to nurturing young leaders."/>
            </div>
            <ul> 
                <li><img src={PART1} alt="PART1" className="partimg partimgshrink" /></li>
                <li><img src={PART2} alt="PART2" className="partimg" /></li>
                <li><img src={PART3} alt="PART3" className="partimg partimgshrink" /></li>
                <li><img src={PART4} alt="PART4" className="partimg " /></li>
                <li><img src={PART5} alt="PART5" className="partimg " /></li>
            </ul>
        </div>
    )
}

export default Partners 