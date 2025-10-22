import "./Fform.css"
import {Link} from "react-router-dom"

const Fform = () => {

    return(
<div className="fform">
            <div className="min-fform">
                <h1>Still have questions?</h1>
                <p>We're here to help! Reach out to us for any additional information.</p>
                <div className="min-fform-div" style={{display: "flex",  alignItems: "center", justifyContent: "center"}}>
                    <Link to="participate" className="btn-light fbtn">Email us</Link>
                    <Link to="volunteer" className="btn-light fbtn">Register Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Fform