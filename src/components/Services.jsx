// src/components/Services.jsx
import React from 'react';
import strengthImg from '../assets/gym/strength-training.webp';
import personalImg from '../assets/gym/personal-training.webp';
import groupImg from '../assets/gym/group-fitness.webp';
import cardioImg from '../assets/gym/cardio-training.webp';
import './Services.css';

const services = [
  {
    title: 'Musculation',
    description: 'Programmes de force avec équipements de pointe.',
    price: '$49',
    duration: '1 mois',
    img: strengthImg
  },
  {
    title: 'Coaching Pers.',
    description: 'Suivi individuel avec un coach expert.',
    price: '$79',
    duration: '1 mois',
    img: personalImg
  },
  {
    title: 'Cours Collectifs',
    description: 'Entraînements en groupe dynamiques.',
    price: '$39',
    duration: '1 mois',
    img: groupImg
  },
  {
    title: 'Cardio Training',
    description: 'Programmes cardiovasculaires intenses.',
    price: '$59',
    duration: '1 mois',
    img: cardioImg
  }
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nos <span>Services</span></h2>
          <p>Des programmes adaptés à tous les niveaux pour atteindre vos objectifs.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.img} alt={service.title} />
                <div className="service-price">{service.price}</div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-footer">
                  <span className="service-duration">⏱ {service.duration}</span>
                  <a href="#membership" className="btn-primary btn-small">S'inscrire</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;