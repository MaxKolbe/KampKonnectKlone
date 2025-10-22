import "./Volunteerbenefits.css"
import Voluntitle from "./Voluntitle"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Volunteerbenefits = () => {
    return (
        <div className="benefits">
            <div className="benefitsHeader">
                <Voluntitle heading="Benefits of Volunteering"/>
            </div>
            <div className="benefitsGrid ">
                <div className="bgrid">
                    <h4><IoMdCheckmarkCircleOutline className="checkmark"/> Make a Difference</h4>
                    <p>Directly impact the lives of young girls by helping them develop skills and confidence.</p>
                </div>
                <div className="bgrid">
                    <h4><IoMdCheckmarkCircleOutline className="checkmark" style={{color: "#9333ea"}}/> Professional Development</h4>
                    <p>Gain valuable leadership and mentoring experience that enhances your professional skills.</p>
                </div>
                <div className="bgrid">
                    <h4><IoMdCheckmarkCircleOutline className="checkmark"/> Community Building</h4>
                    <p>Connect with like-minded individuals who are passionate about youth development.</p>
                </div>
                <div className="bgrid">
                    <h4><IoMdCheckmarkCircleOutline className="checkmark"  style={{color: "#9333ea"}}/> Personal Growth</h4>
                    <p>Experience the joy and fulfillment that comes from giving back and serving others.</p>
                </div>
            </div>
        </div>
    )
}

export default Volunteerbenefits