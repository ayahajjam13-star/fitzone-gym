// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <span className="logo-icon">💪</span>
          <span>FIT<span>ZONE</span></span>
        </div>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setMobileOpen(false)}>Accueil</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>À propos</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#trainers" onClick={() => setMobileOpen(false)}>Coachs</a>
          <a href="#membership" onClick={() => setMobileOpen(false)}>Tarifs</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="nav-cta">Commencez</a>
        </div>
        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;