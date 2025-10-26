import "./Kampinfo.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { LuAnchor } from "react-icons/lu"
import { PiStarFourBold } from "react-icons/pi"
import { LuExternalLink } from "react-icons/lu"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { PiBackpackBold } from "react-icons/pi";
import KIJUMP from "../../assets/KIJUMP.jpg"


const Kampinfo = () => {
    return(
        <> 
        <Navbar />
        {/* HERO */}
        <div className='kamphero'>
            <div className="kamphero-text">
                <PiStarFourBold className="starIconSign "/>
                <h1>Kamp Info</h1>
                <div className="colorBarBrown"></div>
                <p>Everything you need to know to prepare for your amazing Kamp Konnect experience! ✨ </p>
            </div>
        </div>

        {/* THEME */}
        <div className="themeTitle">
            <div className="themeTitleBody">
                <LuAnchor className="themeTitleBodyIcon"/>
                <h1>2025 Theme: Anchored in Hope</h1>
                <div className="colorBar"></div>
            </div>
            <div className="anchorDiv">
                <h1 className="anchorDivh1"><LuAnchor className="anchorDivhicon" /> Anchored in Hope: Our 2025 Theme</h1>
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
        {/* KAMP KODE */}
        <div className="ki-wrapper">
            <div className="ki-hero">
                <h1 className="ki-header">Kamp Kode</h1>
                <div className="colorBar"></div>
                <p className="ki-paragraph">Our guiding principles for an amazing camp experience! 🌟</p>
            </div>
            <div className="ki-block" style={{background: "linear-gradient(to bottom right, #ffffff, #fdf2f8)", border: "1px solid #fbcfe8"}}>
                <h1 className="ki-block-header" style={{background: "linear-gradient(to right, #db2777, #9333ea)"}}><IoMdCheckmarkCircleOutline className="ki-block-icon"/> Our Values and Expectations</h1>
                <ul>
                    <li><p style={{color: "#DB2777", fontWeight: "800", fontSize:"1.4rem"}}>K</p> <p className="ki-p2"><span style={{color: "#9333ea", fontWeight: "600"}}>Keep to time:</span> Respect others and show discipline by being punctual.</p></li>
                    <li><p style={{color: "#DB2777", fontWeight: "800", fontSize:"1.4rem"}}>A </p> <p className="ki-p2"><span style={{color: "#9333ea", fontWeight: "600"}}>Accept everyone:</span> Be a friend to all, not just a few.</p></li>
                    <li><p style={{color: "#DB2777", fontWeight: "800", fontSize:"1.4rem"}}>M </p> <p className="ki-p2"><span style={{color: "#9333ea", fontWeight: "600"}}>Maintain order:</span> A place for everything and everything in its place.</p></li>
                    <li><p style={{color: "#DB2777", fontWeight: "800", fontSize:"1.4rem"}}>P</p> <p className="ki-p2"><span style={{color: "#9333ea", fontWeight: "600"}}>Play to win, learn to lose:</span> Give your best and accept outcomes with grace.</p></li>
                    <li><p style={{color: "#DB2777", fontWeight: "800", fontSize:"1.4rem"}}>K</p> <p className="ki-p2"><span style={{color: "#DB2777", fontWeight: "600"}}>Kindness always pays:</span> Means serving others without being asked.</p></li>
                    <li><p style={{color: "#9333ea", fontWeight: "800", fontSize:"1.4rem"}}>O </p><p className="ki-p2"><span style={{color: "#DB2777", fontWeight: "600"}}>Own your attitude:</span> Face challenges without complaining.</p></li>
                    <li><p style={{color: "#9333ea", fontWeight: "800", fontSize:"1.4rem"}}>N</p> <p className="ki-p2"><span style={{color: "#DB2777", fontWeight: "600"}}>Nurture others:</span> Encourage your peers to keep going.</p></li>
                    <li><p style={{color: "#9333ea", fontWeight: "800", fontSize:"1.4rem"}}>N</p> <p className="ki-p2"><span style={{color: "#DB2777", fontWeight: "600"}}>Notice beauty:</span> Let beauty, grace, and delicacy shine in all you do.</p></li>
                    <li><p style={{color: "#9333ea", fontWeight: "800", fontSize:"1.4rem"}}>E</p> <p className="ki-p2"><span style={{color: "#DB2777", fontWeight: "600"}}>Execute tasks responsibly:</span> Complete your duties with care and effort.</p></li>
                    <li><p style={{color: "#9333ea", fontWeight: "800", fontSize:"1.4rem"}}>C </p> <p className="ki-p2"><span style={{color: "#DB2777", fontWeight: "600"}}>Choose honesty:</span> Truthfulness keeps your heart free.</p></li>
                    <li><p style={{color: "#9333ea", fontWeight: "800", fontSize:"1.4rem"}}>T</p> <p className="ki-p2"><span style={{color: "#DB2777", fontWeight: "600"}}>Turn up cheerful:</span> Choose joy even in difficulty.</p></li>
                </ul> 
            </div>
        <img src={KIJUMP} alt="girls jumoing" />
        </div>

        {/* PACKING LIST */}
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
        <Footer />
        </>
    )
}

export default Kampinfo