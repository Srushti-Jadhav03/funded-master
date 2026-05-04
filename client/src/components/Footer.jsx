import React from 'react';

export function CTABanner() {
  return (
    <section style={{ padding: '60px', background: '#060a07' }}>
      <div style={{
        maxWidth: '780px', margin: '0 auto',
        background: 'linear-gradient(135deg, #0d2018 0%, #0a1c12 50%, #081408 100%)',
        border: '1px solid rgba(0,230,118,0.2)',
        borderRadius: '20px', padding: '64px 48px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(0,230,118,0.1), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800, color: '#fff', marginBottom: '12px', position: 'relative',
        }}>
          Let's join with millions of<br />
          <span style={{ color: '#00e676' }}>Traders in the world</span>
        </h2>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '32px', position: 'relative' }}>
          <a href="#pricing" style={{
            background: '#00e676', color: '#000', padding: '13px 32px',
            borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem',
            fontFamily: 'Syne, sans-serif',
            boxShadow: '0 0 24px rgba(0,230,118,0.4)',
          }}>Get Funded</a>
          <a href="#programs" style={{
            border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff',
            padding: '13px 32px', borderRadius: '8px',
            fontWeight: 600, fontSize: '0.95rem',
            fontFamily: 'Syne, sans-serif',
          }}>Try Demo</a>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#040806', borderTop: '1px solid rgba(0,230,118,0.08)', padding: '60px 60px 30px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '50px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg,#00e676,#00c853)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>⬡</div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1.05rem' }}>Funded Master</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#3a6040', lineHeight: 1.7, maxWidth: '220px' }}>
              To win the game, you need strong support and diligent preparation, For Traders.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '18px' }}>Company</h5>
            {['Programs', 'Pricing', 'Trading Rules', 'FAQs', 'Affiliates'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: '#4a7a50', fontSize: '0.82rem', marginBottom: '12px', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#00e676'}
                onMouseLeave={e => e.target.style.color = '#4a7a50'}
              >{l}</a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h5 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '18px' }}>Legal</h5>
            {['Privacy Policy', 'Terms & Conditions', 'Return & Refund Policy', 'Shipping Policy'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: '#4a7a50', fontSize: '0.82rem', marginBottom: '12px', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#00e676'}
                onMouseLeave={e => e.target.style.color = '#4a7a50'}
              >{l}</a>
            ))}
          </div>

          {/* Social */}
          <div>
            <h5 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '18px' }}>Let's Connect</h5>
            {[
              { icon: '💬', label: 'Discord' },
              { icon: '✕', label: 'x.com' },
              { icon: '✈️', label: 'Telegram' },
              { icon: '📷', label: 'Instagram' },
              { icon: '▶️', label: 'Youtube' },
              { icon: 'in', label: 'LinkedIn' },
            ].map(s => (
              <a key={s.label} href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4a7a50', fontSize: '0.82rem', marginBottom: '12px', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#00e676'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#4a7a50'; }}
              >
                <span style={{ fontSize: '0.9rem' }}>{s.icon}</span>{s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(0,230,118,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
          <p style={{ fontSize: '0.78rem', color: '#2a4a30' }}>© 2025 Funded Master Pvt.Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '0.78rem', color: '#2a4a30', textDecoration: 'none' }}>Terms & Conditions</a>
            <a href="#" style={{ fontSize: '0.78rem', color: '#2a4a30', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ fontSize: '0.7rem', color: '#1a3020', lineHeight: 1.7 }}>
          Funded Master is an education and evaluation company that does not collect customer deposits or offer financial services to customers. All accounts provided to customers are in a virtual environment with virtual money. All information provided on this website is for educational purposes only in the area of financial market trading and does not serve in anyway as specific investment recommendations, trading recommendations, analysis of investment opportunities or similar general recommendations regarding the trading of investment instruments.
        </p>
        <p style={{ fontSize: '0.7rem', color: '#1a3020', lineHeight: 1.7, marginTop: '10px' }}>
          Restricted countries: Pakistan, Iran, Syria, Myanmar, Bangladesh, Vietnam, North Korea, the Russian Federation, the Republic of Belarus, Cuba, Lebanon, Libya, Sudan, Crimea, Donetsk and Luhansk regions of Ukraine, United Arab Emirates.
        </p>
      </div>
    </footer>
  );
}
