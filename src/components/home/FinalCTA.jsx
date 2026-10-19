import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Compass } from 'lucide-react';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-content">
          <div style={{ color: '#D4AF37', fontWeight: '700', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Kasat's Emerge India & Overseas
          </div>
          <h2 className="final-cta-heading">
            Your Future. Our Guidance. Endless Opportunities.
          </h2>
          <p className="final-cta-sub">
            Study in India or Abroad — We Guide You at Every Step!
          </p>

          <div style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '28px', opacity: 0.9 }}>
            "Emerge Today, Excel Tomorrow !"
          </div>

          <div className="final-cta-buttons">
            <Link to="/courses" className="btn btn-primary btn-lg" style={{ backgroundColor: '#FFFFFF', color: 'var(--color-deep-green)' }}>
              <Compass size={18} />
              <span>Explore Courses</span>
            </Link>
            <a
              href={buildWhatsAppUrl("Hello Emerge India & Overseas, I would like to get direct admission guidance.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={18} />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
