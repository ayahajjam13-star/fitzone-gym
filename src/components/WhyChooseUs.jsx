// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    icon: '🏋️',
    title: 'Équipements Modernes',
    description: 'Des machines de dernière génération pour des entraînements efficaces.'
  },
  {
    icon: '👨‍🏫',
    title: 'Coachs Experts',
    description: 'Des professionnels certifiés pour vous guider et vous motiver.'
  },
  {
    icon: '🤝',
    title: 'Communauté Active',
    description: 'Rejoignez une communauté de passionnés de fitness.'
  },
  {
    icon: '🎯',
    title: 'Programmes Personnalisés',
    description: 'Des plans d\'entraînement adaptés à vos objectifs.'
  }
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Pourquoi <span>Choisir FitZone</span></h2>
          <p>Ce qui nous distingue des autres salles de sport.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;