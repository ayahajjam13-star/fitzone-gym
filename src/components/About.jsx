// src/components/About.jsx
import React from 'react';
import aboutImage from '../assets/gym/about.webp';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src={aboutImage} alt="FitZone Gym" />
            <div className="about-experience">
              <span>15+</span>
              <p>Années d'Excellence</p>
            </div>
          </div>
          <div className="about-content">
            <div className="section-header text-left">
              <h2>À Propos de <span>FitZone</span></h2>
              <p>Le meilleur centre de fitness pour atteindre vos objectifs.</p>
            </div>
            <p>
              FITZONE est bien plus qu'une salle de sport. C'est une communauté dédiée à la transformation
              physique et mentale. Avec des équipements de dernière génération et des coachs certifiés,
              nous vous offrons tout ce dont vous avez besoin pour réussir.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <span>🏆</span>
                <div>
                  <h4>Excellence</h4>
                  <p>Des programmes certifiés</p>
                </div>
              </div>
              <div className="about-feature">
                <span>💪</span>
                <div>
                  <h4>Performance</h4>
                  <p>Des résultats garantis</p>
                </div>
              </div>
              <div className="about-feature">
                <span>🤝</span>
                <div>
                  <h4>Communauté</h4>
                  <p>Un environnement motivant</p>
                </div>
              </div>
            </div>
            <a href="#membership" className="btn-primary">Rejoindre Maintenant</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;