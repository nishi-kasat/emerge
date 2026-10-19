import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '../../lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppQrCode({ size = 180, caption = "SCAN TO WHATSAPP", showNumber = true }) {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const targetUrl = buildWhatsAppUrl();

  useEffect(() => {
    QRCode.toDataURL(targetUrl, {
      width: size * 2,
      margin: 1,
      color: {
        dark: '#0D5427',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'H'
    })
      .then(url => setQrDataUrl(url))
      .catch(err => console.error('Error generating WhatsApp QR code', err));
  }, [targetUrl, size]);

  return (
    <div className="whatsapp-qr-wrapper">
      <div className="whatsapp-qr-header">
        <MessageCircle size={18} className="text-green" />
        <span className="whatsapp-qr-title">WhatsApp Us</span>
      </div>

      <div className="whatsapp-qr-box" style={{ width: size, height: size }}>
        {qrDataUrl ? (
          <div className="qr-image-container">
            <img 
              src={qrDataUrl} 
              alt={`WhatsApp QR Code for ${WHATSAPP_CONFIG.displayWhatsAppNumber}`} 
              width={size} 
              height={size} 
              className="qr-image"
            />
            <div className="qr-center-icon">
              <span className="wa-icon-badge">💬</span>
            </div>
          </div>
        ) : (
          <div className="qr-loading">Generating...</div>
        )}
      </div>

      {showNumber && (
        <a 
          href={targetUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-number-badge"
          title="Click to chat directly on WhatsApp"
        >
          {WHATSAPP_CONFIG.displayWhatsAppNumber}
        </a>
      )}

      {caption && <span className="whatsapp-qr-caption">{caption}</span>}
    </div>
  );
}
