import "./Kampinfotheme.css"
import { LuAnchor } from "react-icons/lu"
import { LuExternalLink } from "react-icons/lu"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Kampinfotheme = () => {

    return(
       <div className="themeTitle">
            <div className="themeTitleBody">
                <LuAnchor className="themeTitleBodyIcon"/>
                <h1>2025 Theme: Anchored in Hope</h1>
                <div className="colorBar"></div>
            </div>
            <div className="anchorDiv">
                <h1 className="anchorDivh1"><LuAnchor className="anchorDivhicon" /><span className="themetitlegrad"> Anchored in Hope: Our 2025 Theme </span></h1>
                <p className="anchorDivp">This year's theme draws inspiration from the Jubilee Year of Hope, inviting participants to first renew their hope in Christ by rediscovering their identity as beloved children of God through formation and prayer. <br /><br /> From this renewed foundation, they will be challenged to become bearers of hope to others, recognising that they have a unique mission to bring light to the world around them through acts of service, joy, and friendship.</p>
                <div className="anchorMeaningP">
                    <div className="anchorMeaningC">
                        <p>What does it mean to be "Anchored in Hope"?</p>
                        <ul>
                            <li> <IoMdCheckmarkCircleOutline className="anchorIcon"/> Finding stability and purpose in a changing world</li>
                            <li> <IoMdCheckmarkCircleOutline className="anchorIcon"/> Discovering your unique mission to bring light to others</li>
                            <li> <IoMdCheckmarkCircleOutline className="anchorIcon"/> Building a foundation of faith that withstands life's challenges</li>
                            <li> <IoMdCheckmarkCircleOutline className="anchorIcon"/> Becoming a bearer of hope through service and friendship</li>
                        </ul>
                    </div>
                    <a href="https://www.iubilaeum2025.va/en.html" className="btn btnAnchor">Visit the Jubilee of Hope Website <LuExternalLink/> </a>
                </div>
            </div>
    </div>
    )
}

export default Kampinfotheme