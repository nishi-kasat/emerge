import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_CONFIG } from '../../lib/whatsapp';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />

      {/* Floating WhatsApp Action */}
      <a
        href={buildWhatsAppUrl("Hello Emerge India & Overseas, I would like to enquire about admission guidance.")}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 93212 60123)"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          zIndex: 999,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'pointer'
        }}
      >
        <MessageCircle size={30} />
      </a>
    </>
  );
}
