import { Link } from "react-router-dom"
import "./Form.css"
const Form = () => {

    return(
        <div className="form">
            <div className="min-form">
                <h1>Ready to Join Kamp Konnect?</h1>
                <p>Register today to secure your spot for an unforgettable holiday experience of learning, growth, and fun!</p>
                <div className="min-form-div" style={{display: "flex",  alignItems: "center", justifyContent: "center"}}>
                    <Link to="participate" className="btn-light fbtn">Register Now</Link>
                    <Link to="volunteer" className="btn-light fbtn">Volunteer with us</Link>
                </div>
            </div>
        </div>
    )
}

export default Form 