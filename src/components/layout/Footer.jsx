import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Globe, ChevronRight } from 'lucide-react';
import { organization } from '../../data/organization';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <Link to="/">
              <img 
                src="/images/emerge-logo.jpg" 
                alt="Kasat's Emerge India & Overseas" 
                className="footer-brand-logo"
              />
            </Link>
            <p className="footer-desc">
              Your trusted educational admission partner for medical, engineering, management, hospitality, and overseas studies across top universities in India and around the globe.
            </p>
            <div style={{ marginTop: '14px' }}>
              <span style={{ fontSize: '0.85rem', color: '#B8A8A2', display: 'block', marginBottom: '8px' }}>
                Under the Leadership of:
              </span>
              <strong style={{ color: '#FFFFFF', fontSize: '1rem', display: 'block' }}>
                Er. Nandkishor Kasat
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#A7BE9A' }}>
                Founder & Education Director (26+ Years Experience)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/"><ChevronRight size={13} style={{ display: 'inline', marginRight: '4px' }} /> Home</Link></li>
              <li><Link to="/about"><ChevronRight size={13} style={{ display: 'inline', marginRight: '4px' }} /> About Us</Link></li>
              <li><Link to="/courses"><ChevronRight size={13} style={{ display: 'inline', marginRight: '4px' }} /> Explore Courses</Link></li>
              <li><Link to="/destinations"><ChevronRight size={13} style={{ display: 'inline', marginRight: '4px' }} /> Study Destinations</Link></li>
              <li><Link to="/universities"><ChevronRight size={13} style={{ display: 'inline', marginRight: '4px' }} /> Partner Universities</Link></li>
              <li><Link to="/contact"><ChevronRight size={13} style={{ display: 'inline', marginRight: '4px' }} /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Key Disciplines */}
          <div>
            <h4 className="footer-col-title">Key Guidance</h4>
            <ul className="footer-links">
              <li><Link to="/courses?category=Medical+%26+Healthcare">Medical (MBBS, BAMS, BHMS)</Link></li>
              <li><Link to="/courses?category=Medical+%26+Healthcare">Paramedical & BPTH</Link></li>
              <li><Link to="/courses?category=Engineering+%26+Technology">Engineering (B.Tech & AI)</Link></li>
              <li><Link to="/courses?category=Management+%26+Business">Management (MBA & BBA)</Link></li>
              <li><Link to="/courses?category=Hospitality+%26+Tourism">Hotel Management & Culinary</Link></li>
              <li><Link to="/destinations">Overseas Admissions (10 Countries)</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Where to Reach Us</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} />
              <div>
                <strong>Offices / Counselling Centres:</strong>
                <p>Palghar • Virar • Bhayandar (Maharashtra)</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <strong>Phone Contacts:</strong>
                <p>
                  <a href="tel:+919867260123">+91 98672 60123</a><br />
                  <a href="tel:+919272797123">+91 92727 97123</a>
                </p>
              </div>
            </div>

            <div className="footer-contact-item">
              <MessageCircle size={18} />
              <div>
                <strong>WhatsApp Helpline:</strong>
                <p>
                  <a 
                    href={buildWhatsAppUrl("Hello Emerge India & Overseas, I would like to enquire about admission guidance.")}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    +91 93212 60123
                  </a>
                </p>
              </div>
            </div>

            <div className="footer-contact-item">
              <Globe size={18} />
              <div>
                <strong>Official Website:</strong>
                <p><a href="https://www.emergeio.org" target="_blank" rel="noopener noreferrer">www.emergeio.org</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <div>
            © {new Date().getFullYear()} Kasat's Emerge India & Overseas. All Rights Reserved.
          </div>
          <div className="social-links">
            <span style={{ fontSize: '0.85rem', color: '#D1C4C0' }}>Social:</span>
            <a 
              href="https://facebook.com/EmergeIndiaOverseas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              title="Facebook @EmergeIndiaOverseas"
            >
              f
            </a>
            <a 
              href="https://instagram.com/emergeindiaoverseas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              title="Instagram @emergeindiaoverseas"
            >
              ig
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
