import React, { useState, useEffect, useMemo } from 'react';
import { MessageCircle, MapPin, Building, Filter, CheckCircle2 } from 'lucide-react';
import { universitiesData, universityCategories } from '../data/universities';
import { buildInstituteInquiryUrl } from '../lib/whatsapp';

export default function Universities() {
  const [selectedCategory, setSelectedCategory] = useState("All Institutions");

  useEffect(() => {
    document.title = "Universities & Institutions | Emerge India & Overseas";
    window.scrollTo(0, 0);
  }, []);

  const filteredUniversities = useMemo(() => {
    if (selectedCategory === "All Institutions") return universitiesData;
    return universitiesData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="universities-page">
      {/* Page Hero */}
      <section className="section-tight" style={{ background: 'linear-gradient(135deg, var(--color-deep-green) 0%, #083719 100%)', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ color: '#D4AF37', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Institutional Network
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: '2.8rem', marginBottom: '12px' }}>
            Universities & Institutions Network
          </h1>
          <p style={{ color: '#C8E6C9', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            3500+ Universities & Institutions across India and 7 Continents.
          </p>
        </div>
      </section>

      {/* Verified Highlights Banner */}
      <section className="section-tight" style={{ backgroundColor: '#FAF4F3', borderBottom: '2px solid var(--color-border-green)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', backgroundColor: 'var(--color-dark-brown)', color: '#FFFFFF', padding: '4px 14px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '10px' }}>
              Top Institutes in India
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-dark-brown)', marginBottom: '8px' }}>
              Guidance for Premier National & Private Institutions
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              Direct university seats in Maharashtra, Karnataka, Gujarat, MP & Rajasthan for Medical, Engineering, Management, Hospitality & Paramedical courses.
            </p>
          </div>
        </div>
      </section>

      {/* Main Directory */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '18px 24px', borderRadius: '10px', border: '1.5px solid var(--color-border-green)', marginBottom: '32px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-deep-green)' }}>
              <Filter size={16} />
              <span>Select Institution Category:</span>
            </div>
            <div className="category-chips">
              {universityCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`category-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Institutions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
            {filteredUniversities.map((item) => (
              <div 
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid var(--color-border-green)',
                  borderRadius: '10px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '70px', height: '70px', padding: '4px', border: '1px solid var(--color-border-light)', borderRadius: '8px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src={item.logo} alt={`${item.name} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-primary-green)', textTransform: 'uppercase' }}>
                      {item.type}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--color-deep-green)', lineHeight: '1.3' }}>
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                  <MapPin size={15} style={{ color: 'var(--color-dark-brown)' }} />
                  <span>{item.location}</span>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '16px', flexGrow: 1 }}>
                  {item.description}
                </p>

                {item.popularProgrammes && item.popularProgrammes.length > 0 && (
                  <div style={{ marginBottom: '18px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-deep-green)', marginBottom: '6px' }}>
                      Key Academic Programmes:
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {item.popularProgrammes.map((p, idx) => (
                        <span key={idx} style={{ backgroundColor: 'var(--color-soft-sage)', color: 'var(--color-deep-green)', padding: '3px 8px', borderRadius: '3px', fontSize: '0.75rem', fontWeight: '600' }}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ paddingTop: '14px', borderTop: '1px solid var(--color-border-light)', marginTop: 'auto' }}>
                  <a
                    href={buildInstituteInquiryUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ width: '100%' }}
                  >
                    <MessageCircle size={15} />
                    <span>Enquire About Admission</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
