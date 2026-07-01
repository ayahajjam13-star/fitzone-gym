// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Statistics from './components/Statistics';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Trainers />
      <Gallery />
      <Membership />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;