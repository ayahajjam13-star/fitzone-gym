// src/components/Trainers.jsx
import React from 'react';
import sarahImg from '../assets/gym/trainer-sarah.webp';
import johnImg from '../assets/gym/trainer-john.webp';
import mikeImg from '../assets/gym/trainer-mike.webp';
import './Trainers.css';

const trainers = [
  {
    name: 'Sarah Johnson',
    specialty: 'CrossFit & Musculation',
    img: sarahImg,
    social: ['📱', '📷', '🐦']
  },
  {
    name: 'John Carter',
    specialty: 'Coaching Personnel',
    img: johnImg,
    social: ['📱', '📷', '🐦']
  },
  {
    name: 'Mike Anderson',
    specialty: 'Yoga & Cardio',
    img: mikeImg,
    social: ['📱', '📷', '🐦']
  }
];

function Trainers() {
  return (
    <section id="trainers" className="trainers">
      <div className="container">
        <div className="section-header">
          <h2>Nos <span>Coachs</span></h2>
          <p>Des experts passionnés pour vous accompagner.</p>
        </div>
        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card glass">
              <div className="trainer-image">
                <img src={trainer.img} alt={trainer.name} />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p>{trainer.specialty}</p>
                <div className="trainer-social">
                  {trainer.social.map((icon, i) => (
                    <span key={i} className="social-icon">{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;