import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { organization } from '../../data/organization';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '../../lib/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Study Destinations", path: "/destinations" },
    { label: "Universities", path: "/universities" },
    { label: "Contact Us", path: "/contact" }
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      {/* Top bar with phones, locations, and WhatsApp link */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} />
              <span>Locations: Palghar • Virar • Bhayandar</span>
            </span>
            <span className="top-bar-item">
              <Phone size={13} />
              <span>Helpline: </span>
              <a href="tel:+919867260123">+91 98672 60123</a>
              <span>/</span>
              <a href="tel:+919272797123">+91 92727 97123</a>
            </span>
          </div>
          <div className="top-bar-right">
            <a 
              href={buildWhatsAppUrl("Hello Emerge India & Overseas, I would like to enquire about admission guidance.")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-bar-item"
            >
              <MessageCircle size={13} />
              <span>WhatsApp: +91 93212 60123</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container main-header-content">
        <Link to="/" className="header-brand" onClick={closeMenu}>
          <img 
            src="/images/emerge-logo.jpg" 
            alt="Kasat's Emerge India & Overseas" 
            className="header-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="header-cta-wrap">
          <a
            href={buildWhatsAppUrl("Hello Emerge India & Overseas, I would like to enquire about admission options.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm header-cta-desktop"
          >
            <MessageCircle size={16} />
            <span>Enquire Now</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button 
            type="button" 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={buildWhatsAppUrl("Hello Emerge India & Overseas, I would like to enquire about admission options.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ width: '100%' }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Inquiry (+91 93212 60123)</span>
            </a>
            <a
              href="tel:+919867260123"
              className="btn btn-secondary btn-sm"
              style={{ width: '100%' }}
            >
              <Phone size={16} />
              <span>Call +91 98672 60123</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
