import "./Faq.css"
import Title from "../Title"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Faccordion from "./Faccordion"
import Fform from "./Fform"

const Faq = () => {
    return(
        <>
        <Navbar />
        <div className="ftitle">
            <Title heading="Frequently Asked Questions" subHeading="Find answers to common questions about Kamp Konnect" hideDisplay="none"/>
        </div>
          <div className="faccContainer">
            <div className="faccSpan">
                <Faccordion faq="How much does the camp cost?" answer="The standard fee for 2025 is ₦250,000. We offer a slightly discounted rate for participants from states with lower economic indicators, to help ensure broader access and inclusion. This covers: Accommodation, Meals, Camp Materials and Swags, Excursions and outings."/>
                <Faccordion faq="Who can participate in Kamp Konnect?" answer="Kamp Konnect is open to girls between ages of 13.5 - 18 who are entering SS1 (Year 10) through SS3 (Year 12). Participants should be eager to learn, grow, and engage with peers in a supportive environment."/>
                <Faccordion faq="When and where does Kamp Konnect take place?" answer="Kamp Konnect takes place during the long holidays in Lagos. Specific dates and venues are announced on our website."/>
                <Faccordion faq="What activities are included in the program?" answer="The program includes leadership workshops, cultural excursions, art and craft sessions, team-building activities, guest speaker sessions, and various recreational activities designed to foster personal growth and friendship."/>
                <Faccordion faq="How do we get to the camp venue??" answer="Parents are responsible for transporting their daughters to the venue on the first day and picking them up on the final day. If you’d like to coordinate a group drop-off with other parents, feel free to reach out via the parent WhatsApp group."/>
                <Faccordion faq="Who is behind Kamp Konnect?" answer="The camp is organised by a team of passionate educators and youth mentors from The Lagoon School, Elara Study Centre, Wavecrest Study Centre, Roseville Secondary School and Uzommiri Study Centre. Our facilitators have years of experience guiding young girls in leadership and character development"/>
                <Faccordion faq="What should participants bring to camp?" answer="A detailed packing list will be provided to all registered participants closer to the camp date. Generally, participants should bring comfortable and decent clothing, personal items, and any specific materials mentioned in the pre-camp communication."/>
                <Faccordion faq="Why are phones not allowed at Kamp Konnect?" answer="We want the girls to disconnect from screens and distractions so they can truly connect, with themselves, their peers, and the learning experience. That said, we stay in close contact with parents throughout the week (see next question)."/>
                <Faccordion faq="How can parents stay updated during the camp?" answer="You’ll be added to a WhatsApp group for updates, photos, and announcements throughout the camp. If you ever need to speak with your daughter urgently or she needs to contact you, she will be able to do so through a designated camp line."/>
                <Faccordion faq="Is Kamp Konnect safe?" answer="Yes. The camp is hosted in a secure location with adult supervision 24/7. All volunteers and coordinators receive trainings on first aid and upholding strict safeguarding policies. Your daughter will be assigned to a small group with volunteers who look out for them throughout the camp."/>
                <Faccordion faq="Can I sponsor a girl to attend?" answer="Absolutely! Your support could change a girl’s life. You can do so directly on the donate section of the website."/>
            </div>
        </div>
        <Fform />
        <Footer/>
        </>
    )
}

export default Faq