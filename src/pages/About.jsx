import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, ShieldCheck, HeartHandshake, Compass, Phone, MessageCircle, MapPin } from 'lucide-react';
import { organization } from '../data/organization';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import WhatsAppQrCode from '../components/common/WhatsAppQrCode';

export default function About() {
  const { founder } = organization;

  useEffect(() => {
    document.title = "About Us | Emerge India & Overseas";
    window.scrollTo(0, 0);
  }, []);

  const servicesList = [
    {
      title: "Medical Course Admission Guidance",
      desc: "Comprehensive counseling for MBBS, BAMS, BHMS, BPTH, BDS, BOPT, Nursing, and Pharmacy seats in Maharashtra, Karnataka, Gujarat, MP, UP, Rajasthan, and Punjab."
    },
    {
      title: "Engineering & Technology Guidance",
      desc: "Guiding aspirants for B.Tech, Computer Science, AI & ML, Robotics, and core branches across prominent private universities and autonomous institutions."
    },
    {
      title: "Management & Business Education",
      desc: "Structured assistance for MBA, BBA, and PGDM admissions, with emphasis on institution credibility, curriculum rigor, and placement history."
    },
    {
      title: "Hospitality & Hotel Management",
      desc: "Guidance for Bachelor of Hotel Management (BHM), culinary arts, and luxury hospitality courses in premier institutes in India and overseas."
    },
    {
      title: "Overseas Education Counselling",
      desc: "End-to-end guidance for higher education across 10 global destinations including the UK, USA, Australia, Canada, Germany, Ireland, Singapore, New Zealand, UAE, and Italy."
    },
    {
      title: "Course and Institution Selection",
      desc: "Objective, student-centric matching based on academic profile, entrance scores, budget parameters, and long-term career aspirations."
    },
    {
      title: "CAP & Counselling Navigation",
      desc: "In-depth procedural support throughout Centralised Admission Process (CAP) rounds, document verification, choice-filling, and seat freeze/float procedures."
    },
    {
      title: "Support Until College Admission",
      desc: "Dedicated personal assistance that continues through documentation, college reporting, and final seat confirmation as committed in our brochure."
    }
  ];

  const approachPillars = [
    {
      title: "Student-Centric Alignment",
      desc: "Every recommendation is customized to the student's unique academic strengths, financial plan, and career goals rather than commercial quotas."
    },
    {
      title: "Transparent & Direct Channels",
      desc: "We operate with zero consultancy fees and direct university tie-ups, ensuring total clarity on fee structures, quotas, and admission rules."
    },
    {
      title: "End-to-End Handholding",
      desc: "From initial career counseling and CAP round filings to college reporting and hostel verification, our support remains unwavering."
    }
  ];

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="section-tight" style={{ background: 'linear-gradient(135deg, var(--color-deep-green) 0%, #083719 100%)', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ color: '#D4AF37', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Kasat's Emerge India & Overseas
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: '2.8rem', marginBottom: '12px' }}>
            About Emerge India & Overseas
          </h1>
          <p style={{ color: '#C8E6C9', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto' }}>
            Your Global Education Partner — Dream Big, Study Anywhere!
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="section-badge">Who We Are</div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--color-deep-green)' }}>
                Dedicated to Educational Excellence & Student Success
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '18px' }}>
                <strong>Kasat's Emerge India & Overseas</strong> is a dedicated educational admission consultancy providing professional guidance for students seeking higher education in India and abroad.
              </p>
              <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                Our mission is to give students access to world-class education no matter where they are. Through transparent guidance, direct institution relationships, and comprehensive counseling, we connect students to premier medical institutions, engineering faculties, top management institutes, and recognized international universities across 7 continents.
              </p>
              <div style={{ backgroundColor: '#FFFFFF', borderLeft: '4px solid var(--color-primary-green)', padding: '16px 20px', borderRadius: '0 8px 8px 0', border: '1px solid var(--color-border-green)', borderLeftWidth: '4px' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--color-deep-green)', fontWeight: '600', margin: 0 }}>
                  "{organization.missionQuote}"
                </p>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ border: '2px solid var(--color-border-green)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', backgroundColor: '#FFFFFF' }}>
                <img 
                  src="/images/counselling.jpg" 
                  alt="Educational counselling session" 
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Supported by Brochure */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-badge">Verified Offerings</div>
            <h2 className="section-title">Our Comprehensive Services</h2>
            <p className="section-subtitle">
              Verified admission guidance services documented in our official brochure and delivered with complete transparency.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {servicesList.map((service, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--color-off-white)',
                  border: '1.5px solid var(--color-border-green)',
                  borderRadius: '8px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-primary-green)', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-deep-green)' }}>{service.title}</h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.55' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="section founder-section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div className="founder-card">
            <div className="founder-photo-wrap">
              <img 
                src={founder.photo} 
                alt={founder.name} 
                className="founder-photo" 
              />
            </div>
            <div className="founder-content">
              <div className="founder-title-badge">Founder & Director</div>
              <h3>{founder.name}</h3>
              <div className="founder-exp-highlight">
                <Award size={20} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                {founder.experience}
              </div>
              <p className="founder-bio">
                {founder.bio}
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={buildWhatsAppUrl("Hello Er. Nandkishor Kasat, I would like to consult regarding admissions.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageCircle size={18} />
                  <span>Connect with Er. Nandkishor Kasat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-badge">Our Principles</div>
            <h2 className="section-title">Our Counseling Approach</h2>
            <p className="section-subtitle">
              Built on ethics, personal attention, and rigorous institutional research.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {approachPillars.map((pillar, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--color-off-white)',
                  border: '1.5px solid var(--color-border-green)',
                  borderRadius: '10px',
                  padding: '30px 24px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-soft-sage)', color: 'var(--color-deep-green)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontWeight: '800' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-deep-green)', marginBottom: '10px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Contact Details and Locations */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="section-badge">Connect With Us</div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-green)', marginBottom: '16px' }}>
                Visit Our Counselling Centres
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                We welcome students and parents to discuss course choices, eligibility criteria, and admission procedures with our counseling team.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={22} style={{ color: 'var(--color-primary-green)' }} />
                  <div>
                    <strong>Locations:</strong> Palghar, Virar, Bhayandar (Maharashtra)
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={22} style={{ color: 'var(--color-primary-green)' }} />
                  <div>
                    <strong>Call Lines:</strong> <a href="tel:+919867260123">+91 98672 60123</a> / <a href="tel:+919272797123">+91 92727 97123</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MessageCircle size={22} style={{ color: 'var(--color-primary-green)' }} />
                  <div>
                    <strong>WhatsApp Direct:</strong> <a href={buildWhatsAppUrl()}>+91 93212 60123</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Contact Form & Office Details</span>
                </Link>
                <Link to="/courses" className="btn btn-secondary">
                  <span>Browse Courses</span>
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WhatsAppQrCode size={180} caption="SCAN TO CONNECT ON WHATSAPP" showNumber={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
