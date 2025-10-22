import "./Volunteerhero.css"
import VOLHERO from "../../assets/VOLHERO.jpg"
import { Link } from "react-router-dom"

const Volunteerhero = () => {

    return(
        <div className="volunteerHero">
            <div className="vh1">
                <img src={VOLHERO} alt="Volunteer hero image" />
            </div>
             <div className="vh2">
                <h1>Want to join our awesome team of volunteers?</h1>
                <p>Our volunteers are the heart of Kamp Konnect. They bring their skills, passion, and energy to create an unforgettable experience for our campers. Whether you're a professional in your field or simply have a passion for mentoring young girls, we'd love to have you on our team.</p>
                <Link to="/" className="btn">Regsiter as a Volunteer</Link>
            </div>
        </div>
    )
}
export default Volunteerhero