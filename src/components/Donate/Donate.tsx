import "./Donate.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Title from "../Title"


const Donate = () => {
    return(
        <>
        <Navbar />
        <div >
            <Title heading="Sponsor a Camper" subHeading="Your support can change a life. Help us nurture the next generation of female leaders." hideDisplay="none"/>
            <div className="colorBar"></div>
        </div>
        <div>
            <div>
                <img src="" alt="" />
                <h1></h1>
                <p></p>
            </div>
            <div>
                <form>

                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Donate