import "./Volunteerregistration.css"
import Voluntitle from "./Voluntitle"

const Volunteerregistration = () => {

    return(
        <div className="volunteerRegistration">
            <div className="volunteerRegistrationHeader">
                <Voluntitle heading="Volunteer Registration" subHeading="Fill out the form below to register as a volunteer for Kamp Konnect 2025."/>
            </div>
            <div className="volunteerRegistrationForm">
                <div className="volunteerRegistrationFormChild">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecUOkv2srGl2PjkRm02uHSQX9ZMAygzp0-w3wpYdnbT9tt8Q/viewform?embedded=true" height="3400">Loading…</iframe>
                    <span>If the form doesn't load, you can also <a href="">access it directly here.</a></span>
                </div>
            </div>
        </div>
    )
}

export default Volunteerregistration