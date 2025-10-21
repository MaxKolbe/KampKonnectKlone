import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Hero from "../Home/Hero"
import Aboutkk from "./Aboutkk"
import Activity from "./Activity"
import Highlights from "./Highlights"
import Partners from "./Partners"
import Testimonials from "./Testimonials"
import Form from "./Form"
import Stats from "./Stats"

const Home = () => {
    
    return(
        <>
            <Navbar />
            <Hero />
            <Aboutkk />
            <div style={{background: "var(--bg-almwhite)"}}>
            <Activity />
            <Highlights />
            </div>
            <Partners />
            <Testimonials />
            <Form />
            <Stats />
            <Footer />
        </>
    )
}

export default Home