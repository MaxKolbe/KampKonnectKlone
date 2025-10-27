import "./Kampinfo.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Kampinfohero from "./Kampinfohero"
import Kampinfotheme from "./Kampinfotheme"
import Kampkode from "./Kampkode"
import Packinglist from "./Packinglist"
import Electronicspolicy from "./Electronicspolicy"

const Kampinfo = () => {
    return(
        <> 
        <Navbar />
        {/* HERO */}
        <Kampinfohero />
        {/* THEME */}
        <Kampinfotheme />        
        {/* KAMP KODE */}
        <Kampkode />
        {/* Electronicspolicy */}
        <Electronicspolicy />
        {/* PACKING LIST */}
        <Packinglist />
        <Footer />
        </>
    )
}

export default Kampinfo