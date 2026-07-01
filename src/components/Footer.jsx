// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">💪</span>
              <span>FIT<span>ZONE</span></span>
            </div>
            <p>Transformez votre corps, transformez votre vie.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">👍</a>
              <a href="#" aria-label="YouTube">▶️</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#hero">Accueil</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#trainers">Coachs</a></li>
              <li><a href="#membership">Tarifs</a></li>
            </ul>
          </div>
          <div className="footer-hours">
            <h4>Horaires</h4>
            <ul>
              <li>Lun - Ven: 6h - 22h</li>
              <li>Sam: 7h - 20h</li>
              <li>Dim: 8h - 18h</li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Recevez nos offres exclusives.</p>
            <form>
              <input type="email" placeholder="Votre email" />
              <button type="submit" className="btn-primary btn-small">S'inscrire</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 FitZone. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;