// src/components/Statistics.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Statistics.css';

const stats = [
  { label: 'Membres Actifs', value: 10000, suffix: '+' },
  { label: 'Coachs Experts', value: 50, suffix: '+' },
  { label: "Années d'Expérience", value: 15, suffix: '+' },
  { label: 'Prix & Récompenses', value: 20, suffix: '+' }
];

function Statistics() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = 16;
            const totalSteps = duration / stepTime;
            const increment = end / totalSteps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(start);
                return newCounts;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section className="statistics" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{counts[index]}{stat.suffix}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;