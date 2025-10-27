import "./Kampinfo.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import KIJUMP from "../../assets/KIJUMP.jpg"

const Kampkode = () => {

    return(
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

    )
}

export default Kampkode