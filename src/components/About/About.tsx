import "./About.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Title from "../Title"


const About = () => {
    return(
        <> 
        <Navbar />
        <div className="aboutHero">
            <Title heading="About Kamp Konnect" subHeading="Empowering young women through leadership, cultural exploration, and meaningful connections" hideDisplay="none"/>
        </div>
         {/* section */}
        <div className="aboutBody">
            <div className="aboutInnerBody">
                <p>Kamp Konnect is a transformative week-long leadership and cultural experience designed specifically for girls entering SS1 through SS3 (Years 10–12) in Lagos, Nigeria. Our program combines leadership development, artistic expression, cultural exploration, and the building of lasting friendships.</p><br />
                <p>Founded with the vision of nurturing confident, culturally-aware young women, Kamp Konnect provides a unique platform where participants can discover their potential, explore their heritage, and develop skills that will serve them throughout their lives.</p><br />
                <p>Through carefully curated activities, workshops, and experiences, we create an environment where young women can step out of their comfort zones, embrace new challenges, and form connections that extend far beyond the camp experience.</p><br />
            </div>
        </div>
        {/* section */}
        <div className="aboutPreFooter">
            <div className="pf1">
                <h1>Here's what we aim to achieve:</h1>
                <p>To empower young women with the confidence, skills, and cultural awareness needed to become leaders in their communities and beyond.</p>
            </div>
            <div className="pf2">
                <div className="pf2-col">
                    <h6 style={{color: "#db2777"}}>Leadership</h6>
                    <p>Developing essential leadership skills through interactive workshops and real-world applications.</p>
                </div>
                <div className="pf2-col pf2-col2">
                    <h6 style={{color: "#9333ea"}}>Culture</h6>
                    <p>Exploring and celebrating Nigerian heritage through art, music, and cultural experiences.</p>
                </div>
                <div className="pf2-col">
                    <h6 style={{color: "#db2777"}}>Connection</h6>
                    <p>Building lasting friendships and networks that support personal and professional growth.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About