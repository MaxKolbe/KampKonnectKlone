import "./Electronicspolicy.css"
import { BsPhone } from "react-icons/bs"
import { MdOutlineInfo } from "react-icons/md";

const Electronicspolicy = () => {

    return(
        <div className="ki-wrapper" style={{ background: "linear-gradient(to bottom right, #fce7f3, #f3e8ff)"}}>
            <div className="ki-hero">
                <BsPhone style={{color: "#9333ea", fontSize: "3rem", opacity: ".8"}} className="ki-hero-icon bouncy"/> 
                <h1 className="ki-header">Electronics Use Policy</h1>
                <div className="colorBar"></div>
            </div>
            <div className="ki-block" style={{background: "linear-gradient(to bottom right, #ffffff, #fdf2f8)", border: "1px solid #E9D5FF", marginBottom: "2rem"}}>
                <h1 className="ki-block-header" style={{background: "linear-gradient(to right, #9333ea, #db2777)", color: "#fcd34d ", fontSize: "1.4rem"}}><BsPhone className="ki-block-icon" style={{color: "#ffffff"}}/><span className="ki-block-grad">Our New Unplugged Philosophy! 📱✨</span></h1>
               <div className="eup-block">
                    <div className="eup-block1">🌐 Wi-fi is not available for kampers 🌐</div>
                    <div className="eup-block2">
                        <h1><MdOutlineInfo style={{color: "#9333ea", fontSize: "1.4rem", marginRight: "1rem"}}/> 📵 No cellphone use during the kamp</h1>
                        <p>Over the years, we have found that phones and other gadgets can interfere with the genuine trust-building and meaningful connections that should naturally develop between campers and volunteers during a residential camp experience. We encourage you to support your daughter in "unplugging" by leaving all her gadgets at home, so she can be fully present and engaged. Please ensure that any important arrangements are discussed with her before camp begins.</p>
                    </div>
                    <div className="eup-block3">
                        <h1><MdOutlineInfo style={{color: "#db2777", fontSize: "1.4rem", marginRight: "1rem"}}/>🚫 No electronic gadgets allowed</h1>
                         <p>This includes, but is not limited to, laptops, iPads, iPods, MP3 players. and other handheld systems. We want to embrace the beauty of real-world connections! 🌟</p>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Electronicspolicy