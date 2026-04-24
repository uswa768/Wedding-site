import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Details from './pages/Details'
import RSVP from './pages/RSVP'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/details" element={<Details />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
