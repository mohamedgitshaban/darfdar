import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from "./Pages/Home.js";
 import Contact from './Pages/Contact';
import Appointment from "./Pages/Appointment.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './Pages/Services';
import Events from './Pages/Events';
import Products from './Pages/Products';
import AboutUs from './Pages/Aboutus.js';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Event" element={<Events/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Appointment" element={<Appointment/>} />
        {/* 
        
        
        
       
        
         */}
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
