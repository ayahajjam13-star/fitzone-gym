// src/components/Membership.jsx
import React from 'react';
import './Membership.css';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    duration: '/mois',
    features: ['Accès salle', 'Équipements de base', 'Horaires standards'],
    popular: false
  },
  {
    name: 'Premium',
    price: '$59',
    duration: '/mois',
    features: ['Accès illimité', 'Cours collectifs', 'Coaching inclus', 'Eau et serviettes'],
    popular: true
  },
  {
    name: 'VIP',
    price: '$99',
    duration: '/mois',
    features: ['Accès illimité', 'Coaching personnel', 'Équipements VIP', 'Eau et serviettes', 'Massage inclus'],
    popular: false
  }
];

function Membership() {
  return (
    <section id="membership" className="membership">
      <div className="container">
        <div className="section-header">
          <h2>Nos <span>Tarifs</span></h2>
          <p>Choisissez le plan qui vous convient.</p>
        </div>
        <div className="membership-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`membership-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">🌟 Le plus populaire</div>}
              <h3>{plan.name}</h3>
              <div className="membership-price">
                {plan.price}
                <span>{plan.duration}</span>
              </div>
              <ul className="membership-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary">S'inscrire</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Membership;