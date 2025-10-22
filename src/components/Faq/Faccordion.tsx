import "./Faccordion.css"
import { MdKeyboardArrowUp } from "react-icons/md"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useState } from "react"

const Faccordion = (props: {faq: string, answer:string}) => {
const [isfaqdown, setIsfasqdown] = useState(false)

const toggleFaq = () => {
    setIsfasqdown(!isfaqdown)
}
    return(
        <div className={isfaqdown ? "facc fhide" : "facc"} onClick={toggleFaq}>
            <h1 className="fh">{props.faq} {isfaqdown? <MdKeyboardArrowUp className="farr"/> : <MdKeyboardArrowDown className="farr"/>}</h1>
            <p className="fp">{props.answer}</p>
        </div>
    )
}

export default Faccordion