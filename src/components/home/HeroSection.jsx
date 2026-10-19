import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Compass, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column */}
          <div>
            <div className="hero-brand-tag">Kasat's Emerge India & Overseas</div>
            <h1 className="hero-heading">
              Your Gateway to Quality Education in <span>India & Overseas</span>
            </h1>
            
            <div className="hero-tagline">Your Global Education Partner</div>
            <div className="hero-subtag">— Dream Big, Study Anywhere! —</div>

            <p className="hero-desc">
              Providing personalized educational counselling, comprehensive course shortlisting, institution selection, and verified admission assistance for top medical, engineering, management, and global degree programmes.
            </p>

            <div className="hero-ctas">
              <Link to="/courses" className="btn btn-primary btn-lg">
                <Compass size={18} />
                <span>Explore Courses</span>
              </Link>
              <a
                href={buildWhatsAppUrl("Hello Emerge India & Overseas, I would like to talk to an educational counsellor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>Talk to Our Counsellor</span>
              </a>
            </div>

            {/* 3 Core Highlights from Brochure 1 */}
            <div className="hero-badges-row">
              <div className="hero-badge-item">
                <Award size={18} />
                <span>EXPERT GUIDANCE</span>
              </div>
              <div className="hero-badge-item">
                <ShieldCheck size={18} />
                <span>TRUSTED ADMISSIONS</span>
              </div>
              <div className="hero-badge-item">
                <Sparkles size={18} />
                <span>BRIGHTER FUTURE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Rectangular photo with clean border */}
          <div>
            <div className="hero-image-card">
              <img 
                src="/images/global-students.jpg" 
                alt="Students exploring global education options" 
                className="hero-img"
              />
              <div className="hero-floating-badge">
                <ShieldCheck size={24} style={{ color: '#25D366' }} />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Direct Admission Assistance</div>
                  <div style={{ fontSize: '0.8rem', color: '#D1C4C0' }}>Medical • Engineering • Management • Abroad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
