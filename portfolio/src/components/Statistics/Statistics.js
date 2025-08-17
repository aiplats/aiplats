import React, { useState, useEffect, useRef } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);

  const stats = [
    { end: 4, suffix: '+', label: 'Projects Completed' },
    { end: 10, suffix: '+', label: 'Experience Technologies' },
    { end: 1, suffix: '+', label: 'Years Experience' },
    { end: 100, suffix: '+', label: 'Coffee Consumed' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsVisible(true);
          hasStarted.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newCounts = stats.map(stat => 
        Math.floor(stat.end * easeOutQuart)
      );
      
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div className="counting-stats" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-number">
              {counts[index]}{stat.suffix}
            </div>
            <div className="stat-label">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;