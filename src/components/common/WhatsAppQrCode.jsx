import React from 'react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '../../lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppQrCode({ size = 200, caption = "SCAN TO WHATSAPP", showNumber = true }) {
  const targetUrl = buildWhatsAppUrl();

  return (
    <div className="whatsapp-qr-wrapper">
      <div className="whatsapp-qr-header">
        <MessageCircle size={18} className="text-green" />
        <span className="whatsapp-qr-title">WhatsApp Us</span>
      </div>

      <a 
        href={targetUrl}
        target="_blank" 
        rel="noopener noreferrer"
        title="Click to chat directly on WhatsApp"
        style={{ display: 'block' }}
      >
        <div className="whatsapp-qr-box" style={{ width: size, height: 'auto' }}>
          <img 
            src="/images/whatsapp-qr.jpeg" 
            alt={`Official WhatsApp QR Code - ${WHATSAPP_CONFIG.brandName}`} 
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', borderRadius: '4px' }}
          />
        </div>
      </a>

      {showNumber && (
        <a 
          href={targetUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-number-badge"
          title="Click to chat directly on WhatsApp"
          style={{ marginTop: '8px' }}
        >
          {WHATSAPP_CONFIG.displayWhatsAppNumber}
        </a>
      )}

      {caption && <span className="whatsapp-qr-caption">{caption}</span>}
    </div>
  );
}
