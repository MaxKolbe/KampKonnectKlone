import "./Kampinfo.css"
import { PiBackpackBold } from "react-icons/pi"

const Packinglist = () => {

    return(
        <div className="ki-wrapper" style={{background: "linear-gradient(to bottom right, #faf5ff, #fdf2f8"}}>
            <div className="ki-hero">
                <PiBackpackBold style={{color: "#db2777", fontSize: "3rem", opacity: ".8"}} className="ki-hero-icon"/> 
                <h1 className="ki-header">Packing List</h1>
                <div className="colorBar"></div>
                <p className="ki-paragraph" style={{marginTop: "1rem"}}>Our dress code is a reflection of both the inner and outer beauty of our campers. Please respect the dress code as a sign of camp unity and be mindful of dressing modestly at work and play. 🎒✨</p>
            </div>
            <div className="ki-block" style={{background: "linear-gradient(to bottom right, #ffffff, #fdf2f8)", border: "1px solid #fbcfe8", marginBottom: "2rem"}}>
                <h1 className="ki-block-header" style={{background: "linear-gradient(to right, #db2777, #9333ea)"}}><PiBackpackBold className="ki-block-icon"/> Essential Items 🌟</h1>
                <ul>
                    <li style={{paddingLeft: "3rem"}}>😊<p className="ki-p2" style={{marginLeft: ".6rem"}}>Your cheerful self</p></li>
                    <li style={{paddingLeft: "3rem"}}>👘<p className="ki-p2" style={{marginLeft: ".6rem"}}>Pajamas</p></li>
                    <li style={{paddingLeft: "3rem"}}>🧥<p className="ki-p2" style={{marginLeft: ".6rem"}}>Dressing gown or House coat</p></li>
                    <li style={{paddingLeft: "3rem"}}>👖<p className="ki-p2" style={{marginLeft: ".6rem"}}>Decent clothing for each day</p></li>
                    <li style={{paddingLeft: "3rem"}}>🩳<p className="ki-p2" style={{marginLeft: ".6rem"}}>4-5 sets of sports outfits</p></li>
                    <li style={{paddingLeft: "3rem"}}>👗<p className="ki-p2" style={{marginLeft: ".6rem"}}>1 Nice outfit for Mass. No mini-skirts, shorts, skimpy straps or flip-flops for Mass</p></li>
                    <li style={{paddingLeft: "3rem"}}>🏊‍♀️<p className="ki-p2" style={{marginLeft: ".6rem"}}>Modest one-piece bathing suit and cover up for the pool</p></li>
                    <li style={{paddingLeft: "3rem"}}>🧦<p className="ki-p2" style={{marginLeft: ".6rem"}}>Underwear and socks for 8 days</p></li>
                    <li style={{paddingLeft: "3rem"}}>👟<p className="ki-p2" style={{marginLeft: ".6rem"}}>1 Pair athletic shoes for daily activities. 1 pair flip flops for beach and shower</p></li>
                    <li style={{paddingLeft: "3rem"}}>👠<p className="ki-p2" style={{marginLeft: ".6rem"}}>1 Pair of dress shoes for Elegant days</p></li>
                    <li style={{paddingLeft: "3rem"}}>🧴<p className="ki-p2" style={{marginLeft: ".6rem"}}> Toiletries: toothbrush, toothpaste, shampoo, comb, soap, sunscreen, etc.</p></li>
                    <li style={{paddingLeft: "3rem"}}>🧺<p className="ki-p2" style={{marginLeft: ".6rem"}}>1 large laundry bag</p></li>
                    <li style={{paddingLeft: "3rem"}}>💧<p className="ki-p2" style={{marginLeft: ".6rem"}}>Refillable water bottle</p></li>
                    <li style={{paddingLeft: "3rem"}}>📿<p className="ki-p2" style={{marginLeft: ".6rem"}}>Rosary</p></li>
                    <li style={{paddingLeft: "3rem"}}>🧢<p className="ki-p2" style={{marginLeft: ".6rem"}}>Visor or hat</p></li>
                    <li style={{paddingLeft: "3rem"}}>📝<p className="ki-p2" style={{marginLeft: ".6rem"}}>Notebook and pencil</p></li>
                    <li style={{paddingLeft: "3rem"}}>🦟<p className="ki-p2" style={{marginLeft: ".6rem"}}>Insect repellent</p></li>
                </ul> 
            </div>
             <div className="ki-block" style={{background: "linear-gradient(to bottom right, #ffffff, #fdf2f8)", border: "1px solid #E9D5FF", marginBottom: "2rem"}}>
                <h1 className="ki-block-header" style={{background: "linear-gradient(to right,#9333ea, #db2777)"}}>Optional Items 🎁</h1>
                <ul>
                    <li style={{paddingLeft: "3rem"}}>🕶️<p className="ki-p2" style={{marginLeft: ".6rem"}}>Sunglasses</p></li>
                    <li style={{paddingLeft: "3rem"}}>🧴<p className="ki-p2" style={{marginLeft: ".6rem"}}>Sunscreen</p></li>
                    <li style={{paddingLeft: "3rem"}}>📚<p className="ki-p2" style={{marginLeft: ".6rem"}}>Books for free time</p></li>
                    <li style={{paddingLeft: "3rem"}}>🎵<p className="ki-p2" style={{marginLeft: ".6rem"}}>Musical instrument for talent show</p></li>
                    <li style={{paddingLeft: "3rem"}}>🎨<p className="ki-p2" style={{marginLeft: ".6rem"}}>Decorations for cabin theme: Campers will receive their cabin assignments before the camp</p></li>
                    <li style={{paddingLeft: "3rem"}}>⌚<p className="ki-p2" style={{marginLeft: ".6rem"}}>Wristwatch</p></li>
                </ul> 
            </div>
             <div className="ki-block" style={{background: "linear-gradient(to bottom right, #ffffff, #fdf2f8)", border: "1px solid #fbcfe8"}}>
                <h1 className="ki-block-header" style={{background: "linear-gradient(to right, #db2777, #9333ea)"}}>What to Leave Behind 🚫</h1>
                <ul>
                    <li style={{paddingLeft: "3rem"}}>😒<p className="ki-p2" style={{marginLeft: ".6rem"}}>Your grudgy self</p></li>
                    <li style={{paddingLeft: "3rem"}}>📱<p className="ki-p2" style={{marginLeft: ".6rem"}}>Cellphones</p></li>
                    <li style={{paddingLeft: "3rem"}}>💻<p className="ki-p2" style={{marginLeft: ".6rem"}}>Electronic gadgets (laptops, iPads, iPods, MP3 players, CD players, Nintendo DS, etc.)</p></li>
                    <li style={{paddingLeft: "3rem"}}>📖<p className="ki-p2" style={{marginLeft: ".6rem"}}>Magazines</p></li>
                    <li style={{paddingLeft: "3rem"}}>💊<p className="ki-p2" style={{marginLeft: ".6rem"}}>Over-the-counter medication</p></li>
                    <li style={{paddingLeft: "3rem"}}>🍿<p className="ki-p2" style={{marginLeft: ".6rem"}}>Snacks and other food</p></li>
                </ul> 
            </div>
        </div>
    )
}

export default Packinglist