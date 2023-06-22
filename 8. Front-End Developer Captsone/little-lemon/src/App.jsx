import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/home/About'
import BookingPage from './components/pages/booking/BookingPage'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Highlights from './components/pages/home/Highlights'
import Testimonials from './components/pages/home/Testimonials'
import Home from './components/pages/home/Home'

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
