import "./Donate.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import DON from "../../assets/DON.jpg"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { useState } from "react"


const Donate = () => {
interface ButtonData {
    id: string
    label: string
}
const cycleButtonItems: ButtonData[] = [
  {id: 'btn-1', label: 'One-time'},
  {id: 'btn-2', label: 'Monthly'},
  {id: 'btn-3', label: 'Quaterly'},
  {id: 'btn-4', label: 'Yearly'}
]
const sButtonItems: ButtonData[] = [
  {id: 'btn-1', label: 'N250,000'},
  {id: 'btn-2', label: 'N500,000'},
  {id: 'btn-3', label: 'N750,000'},
  {id: 'btn-4', label: 'N1,000,000'},
  {id: 'btn-5', label: 'N2,000,000'},
  {id: 'btn-6', label: 'N5,000,000'}
]

const [activeButtonId, setActiveButtonId] = useState<string | null>(cycleButtonItems[0].id)
const [activeButtonIdS, setActiveButtonIdS] = useState<string | null>()

const handleClick = (e: React.FormEvent, buttonId: string) => {
    e.preventDefault()
    setActiveButtonId(buttonId)
} 
const shandleClick = (e: React.FormEvent, buttonId: string) => {
    e.preventDefault()
    setActiveButtonIdS(buttonId)
} 

    return(
        <>
        <Navbar />
        <div className="donateTitle">
            <div className="donateBody">
                <h1>Sponsor a Camper</h1>
                <div className="colorBar"></div>
                <p>Your support can change a life. Help us nurture the next generation of female leaders.</p>
            </div>
        </div>
        <div className="donateParent">
            <div className="donateChild1">
                <img src={DON} alt={DON} />
                <h1>Your Support Can Change a Life</h1>
                <p>By donating to Kamp Konnect, you're giving a young girl the opportunity to attend a week-long leadership and cultural experience designed to build her confidence, character, and skills. <br /><br />
                Some of our applicants are bright, motivated students from under-resourced communities who would not be able to attend without financial support. Your donation goes directly toward covering their camp fees, materials, meals, and transportation.<br /><br />
                Help us nurture the next generation of female leaders. Every contribution counts. Thank you.</p>
            </div>
            <div className="donateChild2">
                <form className="donateForm">
                    <h1><IoMdCheckmarkCircleOutline className="h1icon"/>Choose amount</h1>
                    <div className="billCycle">
                        {cycleButtonItems.map((button) => (
                            <button key={button.id} className={activeButtonId === button.id ? 'cycle greenActive' : 'cycle'} onClick={(e) => handleClick(e, button.id)}>{button.label}</button>
                        ))}
                    </div>
                     <div className="solidAmt">
                        {sButtonItems.map((button) => (
                            <button key={button.id} className={activeButtonIdS === button.id ? 'samt greenActive' : 'samt'} onClick={(e) => shandleClick(e, button.id)}>{button.label}</button>
                        ))}
                    </div>
                    <div className="otheramt"><input type="text" placeholder="other amount" className="amt1" /> <span className="amt2">NGN</span></div>
                    <input type="text" placeholder="Your full name*" />
                    <input type="text" placeholder="Your email address*" />
                    <input type="text" placeholder="Your phone number (optional)" />
                    <label htmlFor="comment"><IoMdCheckmarkCircleOutline className="labelicon"/> Add note/comment</label>
                    <textarea name="comment" id="" placeholder="Enter your message for kamp konnect..." rows={3 }></textarea>
                    <button className="paybtn">Confirm with N0</button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Donate