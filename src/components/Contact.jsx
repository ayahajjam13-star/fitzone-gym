// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactez-<span>Nous</span></h2>
          <p>Nous sommes là pour répondre à vos questions.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span>📞</span>
              <div>
                <h4>Téléphone</h4>
                <p>+212 6 00 55 98 32</p>
              </div>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <div>
                <h4>Email</h4>
                <p>contact@fitzone.ma</p>
              </div>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <div>
                <h4>Adresse</h4>
                <p>Al Hoceima, Maroc</p>
              </div>
            </div>
            <div className="contact-item">
              <span>🕐</span>
              <div>
                <h4>Horaires</h4>
                <p>Lun-Sam: 6h - 22h</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
            <input type="tel" placeholder="Votre téléphone" />
            <textarea placeholder="Votre message" rows="5"></textarea>
            <button type="submit" className="btn-primary">Envoyer</button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204176.24635163632!2d-5.1476601!3d35.2104329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b1a0e1a0b1a0b%3A0x0!2zMzXCsDEyJzM3LjYiTiA1wrAwOCc1MS4zIlc!5e0!3m2!1sen!2sma!4v1620000000000"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen
            loading="lazy"
            title="FitZone Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;