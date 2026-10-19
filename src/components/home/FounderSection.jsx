import React from 'react';
import { Award, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { organization } from '../../data/organization';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export default function FounderSection() {
  const { founder } = organization;

  const highlights = [
    { num: "01", text: "Management Quota Seats" },
    { num: "02", text: "Lowest Fees Structuring" },
    { num: "03", text: "Confirm Admission Assistance" },
    { num: "04", text: "Guidance Throughout CAP" },
    { num: "05", text: "Support till College Admission" }
  ];

  return (
    <section className="section founder-section">
      <div className="container">
        <div className="founder-card">
          {/* Genuine photo with rectangular crop */}
          <div className="founder-photo-wrap">
            <img 
              src={founder.photo} 
              alt={founder.name} 
              className="founder-photo"
            />
          </div>

          {/* Profile details from brochure */}
          <div className="founder-content">
            <div className="founder-title-badge">Leadership & Mentorship</div>
            <h3>{founder.name}</h3>
            <div className="founder-exp-highlight">
              <Award size={20} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
              {founder.experience}
            </div>

            <p className="founder-bio">
              "Having 26+ years of experience in the field of education and promoting the Kasat Group, Er. Nandkishor Kasat is the founder of Emerge India & Overseas Helping you with the right guidance."
            </p>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-dark-brown)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '12px' }}>
                Why Us ? Key Guiding Commitments:
              </div>
              <div className="founder-support-points">
                {highlights.map((item, idx) => (
                  <div key={idx} className="support-point-pill">
                    <span>{item.num}.</span>
                    <div>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={buildWhatsAppUrl("Hello Er. Nandkishor Kasat, I would like to consult regarding education admissions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={18} />
                <span>Consult with Er. Nandkishor Kasat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
