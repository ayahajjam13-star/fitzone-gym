// src/components/Testimonials.jsx
import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Membre Premium',
    text: 'FitZone a transformé ma vie. Les coachs sont incroyables et la communauté est tellement motivante !',
    avatar: '👩‍🦰',
    rating: 5
  },
  {
    name: 'Thomas Dubois',
    role: 'Membre VIP',
    text: 'Les équipements sont modernes et les programmes personnalisés m\'ont permis d\'atteindre mes objectifs.',
    avatar: '👨',
    rating: 5
  },
  {
    name: 'Emma Richard',
    role: 'Membre Basic',
    text: 'Une salle de sport exceptionnelle. Je recommande à tous ceux qui veulent se mettre au fitness.',
    avatar: '👩',
    rating: 5
  }
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Ce que disent nos <span>Membres</span></h2>
          <p>Des retours authentiques de notre communauté.</p>
        </div>
        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prev}>‹</button>
          <div className="testimonial-card">
            <div className="testimonial-avatar">{testimonials[current].avatar}</div>
            <p className="testimonial-text">"{testimonials[current].text}"</p>
            <div className="testimonial-rating">{'⭐'.repeat(testimonials[current].rating)}</div>
            <h4>{testimonials[current].name}</h4>
            <p className="testimonial-role">{testimonials[current].role}</p>
          </div>
          <button className="slider-btn next" onClick={next}>›</button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;