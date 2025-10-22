import "./Volunteercommunity.css"
import VGRID1 from "../../assets/VGRID1.jpg"
import VGRID2 from "../../assets/VGRID2.jpg"
import VGRID3 from "../../assets/VGRID3.jpg"
import VGRID4 from "../../assets/VGRID4.jpg"
import Voluntitle from "./Voluntitle"

const Volunteercommunity = ()=>{

    return(
        <div className="volunterrCommunity">
            <div className="volunterrCommunityHeader">
                <Voluntitle heading="Our Volunteer Community" subHeading="Meet some of the amazing volunteers who make Kamp Konnect possible."/>
            </div>
            <div className="vcGrid"> 
                <img src={VGRID1} alt="vcrid" />
                <img src={VGRID2} alt="vcrid" />
                <img src={VGRID3} alt="vcrid" />
                <img src={VGRID4} alt="vcrid" />
            </div>
        </div>
    )
}

export default Volunteercommunity