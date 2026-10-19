import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Globe, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { organization } from '../data/organization';
import { WHATSAPP_CONFIG, buildContactFormWhatsAppUrl, openExternalUrl, buildWhatsAppUrl } from '../lib/whatsapp';
import WhatsAppQrCode from '../components/common/WhatsAppQrCode';
import { courseCategories } from '../data/courses';
import { studyDestinations } from '../data/destinations';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    destination: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Emerge India & Overseas";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+() -]{8,18}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build the WhatsApp click-to-chat URL with pre-filled message
    const waUrl = buildContactFormWhatsAppUrl(formData);
    setSubmitted(true);

    // Open WhatsApp in a new tab safely
    openExternalUrl(waUrl);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="section-tight" style={{ background: 'linear-gradient(135deg, var(--color-deep-green) 0%, #083719 100%)', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ color: '#D4AF37', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Get in Touch
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: '2.8rem', marginBottom: '12px' }}>
            Contact Us & Counselling Desks
          </h1>
          <p style={{ color: '#C8E6C9', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto' }}>
            Connect with our education counsellors in Palghar, Virar, or Bhayandar, or chat directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Form */}
            <div className="contact-form-panel">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--color-deep-green)', marginBottom: '8px' }}>
                Send an Admission Enquiry
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                Fill out the form below. Upon submission, you will be redirected to WhatsApp with your enquiry details pre-filled to chat directly with our counsellors.
              </p>

              {submitted && (
                <div style={{ backgroundColor: '#E8F5E9', border: '1px solid #A5D6A7', padding: '14px 18px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={20} style={{ color: '#2E7D32', flexShrink: 0 }} />
                  <div style={{ fontSize: '0.92rem', color: '#1B5E20' }}>
                    Thank you! Your details have been prepared for WhatsApp chat. If WhatsApp did not open automatically, <a href={buildContactFormWhatsAppUrl(formData)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '700' }}>click here to start chat</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                    aria-invalid={errors.fullName ? "true" : "false"}
                  />
                  {errors.fullName && (
                    <div style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={14} /> {errors.fullName}
                    </div>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="form-input"
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && (
                      <div style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <AlertCircle size={14} /> {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className="form-input"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <div style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <AlertCircle size={14} /> {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                {/* Course & Destination Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="course" className="form-label">
                      Course of Interest
                    </label>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="e.g. MBBS, B.Tech CSE, MBA, BPTH"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="destination" className="form-label">
                      Preferred Study Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select Destination</option>
                      <option value="India">India (Domestic Institutions)</option>
                      {studyDestinations.map((d) => (
                        <option key={d.id} value={d.country}>
                          {d.country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message / Query
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your entrance score, preferred state or university, budget, or specific query..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-whatsapp btn-lg" style={{ width: '100%' }}>
                  <MessageCircle size={18} />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details & QR Code */}
            <div className="contact-info-panel">
              {/* Direct Details Box */}
              <div className="contact-card-box">
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-green)', marginBottom: '18px' }}>
                  Official Contact Channels
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <MapPin size={22} style={{ color: 'var(--color-primary-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-deep-green)' }}>
                        Service Locations:
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        Palghar • Virar • Bhayandar (Maharashtra)
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Phone size={22} style={{ color: 'var(--color-primary-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-deep-green)' }}>
                        Telephone Numbers:
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.92rem' }}>
                        <a href="tel:+919867260123" style={{ color: 'var(--color-primary-green)', fontWeight: '700' }}>+91 98672 60123</a><br />
                        <a href="tel:+919272797123" style={{ color: 'var(--color-primary-green)', fontWeight: '700' }}>+91 92727 97123</a>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <MessageCircle size={22} style={{ color: '#25D366', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-deep-green)' }}>
                        Official WhatsApp:
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.92rem' }}>
                        <a 
                          href={buildWhatsAppUrl()} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#25D366', fontWeight: '700' }}
                        >
                          +91 93212 60123
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Globe size={22} style={{ color: 'var(--color-primary-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-deep-green)' }}>
                        Official Website:
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.92rem' }}>
                        <a href="https://www.emergeio.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-main)' }}>
                          www.emergeio.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified WhatsApp QR Code */}
              <div style={{ textAlign: 'center' }}>
                <WhatsAppQrCode size={190} caption="SCAN TO START INSTANT CHAT" showNumber={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
