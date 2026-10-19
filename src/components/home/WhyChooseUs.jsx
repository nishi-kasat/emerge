import React from 'react';
import { Check, Phone, MapPin } from 'lucide-react';
import WhatsAppQrCode from '../common/WhatsAppQrCode';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export default function WhyChooseUs() {
  const benefits = [
    { title: "Zero \"0\" Consultancy Fees", desc: "Completely free counseling without hidden charges" },
    { title: "Best Support", desc: "Dedicated guidance from application to enrollment" },
    { title: "1500+ Courses", desc: "Wide array of medical, engineering & professional disciplines" },
    { title: "3500+ Universities", desc: "Direct network with premier domestic and international colleges" },
    { title: "7 Continents", desc: "Global academic opportunities in leading destinations" },
    { title: "Highly Experienced in Overseas Education", desc: "Comprehensive foreign university application expertise" },
    { title: "Direct University Tie-Ups", desc: "Authorized seat counselling and private university allocations" }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="why-choose-card">
          {/* Left: Why Choose Us Claims */}
          <div>
            <h2 className="why-choose-title">Why Choose Us</h2>
            
            <div className="why-features-grid">
              {benefits.map((item, idx) => (
                <div key={idx} className="why-feature-item">
                  <div className="why-check-icon">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="why-feature-text">
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Us Panel with WhatsApp QR */}
          <div className="why-contact-panel">
            <h3>Where to Reach Us</h3>
            
            <div className="why-contact-numbers">
              <a href="tel:+919867260123" className="why-phone-link">
                <Phone size={18} /> +91 98672 60123
              </a>
              <a href="tel:+919272797123" className="why-phone-link">
                <Phone size={18} /> +91 92727 97123
              </a>
            </div>

            <div className="why-locations-tag">
              <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
              Palghar • Virar • Bhayandar
            </div>

            <WhatsAppQrCode size={160} caption="SCAN TO WHATSAPP" showNumber={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
