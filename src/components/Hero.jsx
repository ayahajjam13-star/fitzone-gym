// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/gym/hero.webp';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <img src={heroImage} alt="FitZone Gym" className="hero-image" />
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">🔥 Premium Fitness</div>
          <h1>Transformez <br /><span>Votre Corps</span></h1>
          <p>
            Rejoignez FITZONE et atteignez vos objectifs fitness avec des coachs experts,
            des équipements de pointe et une communauté motivante.
          </p>
          <div className="hero-buttons">
            <a href="#membership" className="btn-primary">Commencez Maintenant</a>
            <a href="#services" className="btn-secondary">Découvrir</a>
          </div>
          <div className="hero-stats">
            <div>
              <span>10k+</span>
              <p>Membres Actifs</p>
            </div>
            <div>
              <span>50+</span>
              <p>Coachs Experts</p>
            </div>
            <div>
              <span>15+</span>
              <p>Années d'Expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;