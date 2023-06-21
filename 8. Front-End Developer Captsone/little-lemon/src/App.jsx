import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import BookingForm from './components/BookingForm'
import BookingPage from './components/BookingPage'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import Home from './components/Home'

function App() {
  return(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Highlights />}/>
      <Route path="/" element={<Testimonials />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/reservations" element={<BookingPage />}/>
    </Routes>
    
    <Footer />
    </BrowserRouter>
  )
}

export default App
