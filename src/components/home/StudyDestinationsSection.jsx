import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';
import { studyDestinations } from '../../data/destinations';

export default function StudyDestinationsSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-badge">Global Footprint</div>
          <h2 className="section-title">Countries We Cover</h2>
          <p className="section-subtitle">
            "Our mission is to give students access to world-class international education no matter where they are."
          </p>
        </div>

        <div className="destinations-grid">
          {studyDestinations.map((dest) => (
            <Link 
              key={dest.id} 
              to={`/destinations#${dest.id}`}
              className="destination-card"
            >
              <div className="destination-flag-wrap">
                <img 
                  src={dest.flag} 
                  alt={`${dest.country} Flag`} 
                  className="destination-flag" 
                  loading="lazy"
                />
              </div>
              <h3 className="destination-name">{dest.country}</h3>
              <span className="destination-action">
                <span>Explore Options</span>
                <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link to="/destinations" className="btn btn-secondary">
            <Globe size={18} />
            <span>Discover All 10 Study Destinations</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
