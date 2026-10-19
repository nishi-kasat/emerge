import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle2, MessageCircle, Calendar, DollarSign, Compass, ArrowRight } from 'lucide-react';
import { studyDestinations } from '../data/destinations';
import { buildDestinationInquiryUrl } from '../lib/whatsapp';

export default function Destinations() {
  useEffect(() => {
    document.title = "Study Destinations | Emerge India & Overseas";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destinations-page">
      {/* Page Hero */}
      <section className="section-tight" style={{ background: 'linear-gradient(135deg, var(--color-deep-green) 0%, #083719 100%)', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ color: '#D4AF37', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            International Education
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: '2.8rem', marginBottom: '12px' }}>
            Study Destinations Across 7 Continents
          </h1>
          <p style={{ color: '#C8E6C9', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            "Our mission is to give students access to world-class international education no matter where they are."
          </p>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="section-tight" style={{ backgroundColor: 'var(--color-off-white)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', backgroundColor: '#FFFFFF', padding: '28px', borderRadius: '10px', border: '1.5px solid var(--color-border-green)', boxShadow: 'var(--shadow-sm)' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-deep-green)', marginBottom: '10px' }}>
              Your Gateway to Global Academic Institutions
            </h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
              Emerge India & Overseas provides end-to-end guidance for higher education across 10 premier countries documented in our brochure. From country selection and university shortlisting to application filing and pre-departure preparation, our counsellors ensure a smooth, transparent overseas transition.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Countries Detail Cards */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {studyDestinations.map((dest, index) => (
              <div 
                key={dest.id}
                id={dest.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid var(--color-border-green)',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'grid',
                  gridTemplateColumns: '260px 1fr',
                  gap: '36px',
                  alignItems: 'flex-start'
                }}
              >
                {/* Left: Flag & Key Facts */}
                <div style={{ textAlign: 'center', borderRight: '1px solid var(--color-border-light)', paddingRight: '24px' }}>
                  <div style={{ width: '130px', height: '80px', margin: '0 auto 16px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)', borderRadius: '6px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
                    <img src={dest.flag} alt={`${dest.country} flag`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-green)', marginBottom: '4px' }}>
                    {dest.country}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-dark-brown)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px' }}>
                    Destination #{index + 1}
                  </div>

                  <div style={{ backgroundColor: 'var(--color-off-white)', padding: '12px', borderRadius: '6px', textAlign: 'left', fontSize: '0.85rem', marginBottom: '20px' }}>
                    <div style={{ marginBottom: '6px' }}><strong>Capital:</strong> {dest.capital}</div>
                    <div style={{ marginBottom: '6px' }}><strong>Currency:</strong> {dest.currency}</div>
                    <div><strong>Intakes:</strong> {dest.intakes.join(', ')}</div>
                  </div>

                  <a
                    href={buildDestinationInquiryUrl(dest.country)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ width: '100%' }}
                  >
                    <MessageCircle size={15} />
                    <span>Enquire for {dest.country}</span>
                  </a>
                </div>

                {/* Right: Overview, Why Study, Popular Courses */}
                <div>
                  <div style={{ display: 'inline-block', backgroundColor: 'var(--color-soft-sage)', color: 'var(--color-deep-green)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.82rem', fontWeight: '700', marginBottom: '10px' }}>
                    {dest.highlight}
                  </div>

                  <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                    {dest.overview}
                  </p>

                  {/* Why study in this country */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-deep-green)', marginBottom: '10px' }}>
                      Key Advantages & Opportunities:
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px 16px' }}>
                      {dest.whyStudy.map((point, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--color-primary-green)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Popular Courses */}
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-deep-green)', marginBottom: '10px' }}>
                      Popular Academic Fields:
                    </h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {dest.popularCourses.map((prog, prIdx) => (
                        <span 
                          key={prIdx}
                          style={{
                            backgroundColor: 'var(--color-off-white)',
                            border: '1px solid var(--color-border-green)',
                            borderRadius: '4px',
                            padding: '4px 12px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            color: 'var(--color-deep-green)'
                          }}
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom disclaimer & CTA */}
      <section className="section-tight" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', marginBottom: '20px' }}>
            * Note: Available courses, entry criteria, tuition fees, and work permit guidelines vary depending on university, programme selection, and destination country regulations. Please speak with our counselors for individual evaluations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/courses" className="btn btn-primary">
              <Compass size={18} />
              <span>Browse Course Directory</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>Book Counselling Session</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
