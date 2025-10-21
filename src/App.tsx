import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import Donate from './components/Donate/Donate'
import Faq from './components/Faq/Faq'
import Kampinfo from './components/Kampinfo/Kampinfo'
import Participate from './components/Participate/Participate'
import Volunteer from './components/Volunteer/Volunteer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/kampinfo" element={<Kampinfo />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
