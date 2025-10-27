import "./Kampinfohero.css"
import { PiStarFourBold } from "react-icons/pi"

const Kampinfohero = () => {

    return(
         <div className='kamphero'>
            <div className="kamphero-text">
                <PiStarFourBold className="starIconSign "/>
                <h1>Kamp Info</h1>
                <div className="colorBarBrown"></div>
                <p>Everything you need to know to prepare for your amazing Kamp Konnect experience! ✨ </p>
            </div>
        </div>
    )
}

export default Kampinfohero