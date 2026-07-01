// src/components/Gallery.jsx
import React, { useState } from 'react';
import gallery1 from '../assets/gym/gallery-1.webp';
import gallery2 from '../assets/gym/gallery-2.webp';
import gallery3 from '../assets/gym/gallery-3.webp';
import gallery4 from '../assets/gym/gallery-4.webp';
import gallery5 from '../assets/gym/gallery-5.webp';
import gallery6 from '../assets/gym/gallery-6.webp';
import './Gallery.css';

const images = [
  { id: 1, src: gallery1, alt: 'Gym 1' },
  { id: 2, src: gallery2, alt: 'Gym 2' },
  { id: 3, src: gallery3, alt: 'Gym 3' },
  { id: 4, src: gallery4, alt: 'Gym 4' },
  { id: 5, src: gallery5, alt: 'Gym 5' },
  { id: 6, src: gallery6, alt: 'Gym 6' }
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Notre <span>Galerie</span></h2>
          <p>Découvrez notre espace et notre équipement.</p>
        </div>
        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelected(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>
        {selected && (
          <div className="lightbox" onClick={() => setSelected(null)}>
            <div className="lightbox-content">
              <img src={selected.src} alt={selected.alt} />
              <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;