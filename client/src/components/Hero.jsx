import React, { useEffect, useRef } from 'react';

const tickerItems = [
  { amount: '$4,659.58', label: 'Toronto, Canada' },
  { amount: '5,863', label: 'Traders' },
  { amount: '$2,119.48', label: 'Sydney, Australia' },
  { amount: '180+', label: 'Countries' },
  { amount: '$8,273.75', label: 'Chennai, India' },
  { amount: '$2.7M', label: 'Payouts' },
  { amount: '$4,659.58', label: 'Virginia, USA' },
  { amount: '5,863', label: 'Traders' },
  { amount: '$2,119.48', label: 'Sydney, Australia' },
  { amount: '180+', label: 'Countries' },
];

export default function Hero() {
  const tickerRef = useRef(null);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#060a07' }}>
      {/* Dark atmospheric background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 80% at 65% 40%, rgba(0,180,80,0.18) 0%, rgba(0,100,40,0.08) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 40% 50% at 20% 30%, rgba(0,50,20,0.5) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Grid texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(0,230,118,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Warrior figure (SVG placeholder styled like the design) */}
      <div style={{
        position: 'absolute', right: '5%', top: '50px', bottom: 0,
        width: '55%', maxWidth: '700px',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}>
        {/* Glowing backdrop for warrior */}
        <div style={{
          position: 'absolute', inset: '10% 5% 0',
          background: 'radial-gradient(ellipse 80% 90% at 60% 50%, rgba(0,230,118,0.12) 0%, rgba(0,180,80,0.06) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }} />
        {/* Warrior silhouette SVG */}
        <svg viewBox="0 0 500 700" style={{ width: '100%', height: '90%', filter: 'drop-shadow(0 0 40px rgba(0,230,118,0.3))' }} preserveAspectRatio="xMidYMax meet">
          {/* Body */}
          <defs>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a4a2a" />
              <stop offset="50%" stopColor="#0d2a18" />
              <stop offset="100%" stopColor="#050f08" />
            </linearGradient>
            <linearGradient id="armorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a6a3a" />
              <stop offset="100%" stopColor="#0a2010" />
            </linearGradient>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00e676" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00c853" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          {/* Legs */}
          <rect x="200" y="530" width="55" height="160" rx="8" fill="url(#bodyGrad)" />
          <rect x="265" y="530" width="55" height="160" rx="8" fill="url(#bodyGrad)" />
          {/* Boots */}
          <rect x="190" y="660" width="75" height="40" rx="6" fill="#0d2a18" />
          <rect x="255" y="660" width="75" height="40" rx="6" fill="#0d2a18" />
          {/* Torso / Armor */}
          <rect x="185" y="330" width="150" height="210" rx="16" fill="url(#armorGrad)" />
          {/* Chest detail */}
          <rect x="205" y="350" width="110" height="80" rx="8" fill="rgba(0,230,118,0.08)" stroke="rgba(0,230,118,0.3)" strokeWidth="1" />
          <rect x="225" y="365" width="70" height="50" rx="4" fill="rgba(0,230,118,0.05)" />
          {/* Belt */}
          <rect x="185" y="510" width="150" height="25" rx="4" fill="#0a1f0e" stroke="rgba(0,230,118,0.3)" strokeWidth="1" />
          {/* Cape */}
          <path d="M185 340 Q150 400 130 550 Q160 530 185 510 L185 340Z" fill="rgba(0,40,15,0.9)" />
          <path d="M335 340 Q370 400 390 550 Q360 530 335 510 L335 340Z" fill="rgba(0,40,15,0.9)" />
          {/* Shield arm */}
          <rect x="320" y="360" width="50" height="130" rx="8" fill="url(#bodyGrad)" />
          {/* Shield */}
          <ellipse cx="390" cy="430" rx="55" ry="70" fill="url(#armorGrad)" stroke="rgba(0,230,118,0.4)" strokeWidth="2" filter="url(#glow)" />
          <ellipse cx="390" cy="430" rx="40" ry="55" fill="rgba(0,20,8,0.8)" />
          <text x="390" y="438" textAnchor="middle" fill="#00e676" fontSize="22" fontWeight="bold" filter="url(#glow)">⬡</text>
          {/* Sword arm */}
          <rect x="150" y="350" width="40" height="120" rx="8" fill="url(#bodyGrad)" />
          {/* Sword */}
          <rect x="108" y="260" width="8" height="220" rx="3" fill="url(#glowGrad)" filter="url(#glow)" />
          <rect x="88" y="440" width="48" height="8" rx="2" fill="#00e676" filter="url(#glow)" />
          {/* Neck */}
          <rect x="228" y="290" width="64" height="55" rx="8" fill="url(#bodyGrad)" />
          {/* Head / Helmet */}
          <ellipse cx="260" cy="265" rx="55" ry="60" fill="url(#armorGrad)" />
          {/* Visor */}
          <rect x="225" y="250" width="70" height="25" rx="4" fill="#060a07" />
          <rect x="225" y="252" width="70" height="3" rx="1" fill="#00e676" opacity="0.6" filter="url(#glow)" />
          {/* Helmet crest */}
          <path d="M260 205 Q275 185 285 165 Q270 170 260 180 Q250 170 235 165 Q245 185 260 205Z" fill="url(#glowGrad)" filter="url(#glow)" />
          {/* Eye glow */}
          <rect x="232" y="255" width="22" height="10" rx="3" fill="#00e676" opacity="0.7" filter="url(#glow)" />
          <rect x="266" y="255" width="22" height="10" rx="3" fill="#00e676" opacity="0.7" filter="url(#glow)" />
          {/* Floor glow */}
          <ellipse cx="260" cy="698" rx="180" ry="15" fill="rgba(0,230,118,0.1)" filter="url(#glow)" />
          {/* Background FM logo/pillar */}
          <rect x="350" y="150" width="20" height="500" rx="4" fill="rgba(0,230,118,0.06)" />
          <rect x="310" y="150" width="20" height="500" rx="4" fill="rgba(0,230,118,0.04)" />
          <rect x="390" y="150" width="20" height="500" rx="4" fill="rgba(0,230,118,0.04)" />
          <rect x="300" y="145" width="120" height="20" rx="4" fill="rgba(0,230,118,0.08)" />
        </svg>
      </div>

      {/* Hero Content - Left aligned */}
      <div style={{
        position: 'relative', zIndex: 10,
        paddingTop: '140px', paddingLeft: '60px', paddingRight: '50%',
        paddingBottom: '60px',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
          fontWeight: 800, color: '#ffffff',
          lineHeight: 1.1, marginBottom: '24px',
          maxWidth: '580px',
          animation: 'fadeUp 0.8s ease both',
        }}>
          Maximum Profit &amp;<br />
          Secure <span style={{ color: '#00e676' }}>Trading Platform</span>
        </h1>
        <p style={{
          color: '#7aad80', fontSize: '1rem',
          maxWidth: '420px', marginBottom: '36px',
          animation: 'fadeUp 0.8s 0.15s ease both',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          Choose the evaluation based on your preference<br />to become an Empire Trader.
        </p>
        <div style={{ display: 'flex', gap: '14px', animation: 'fadeUp 0.8s 0.25s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <a href="#pricing" style={{
            background: '#00e676', color: '#000', padding: '13px 30px',
            borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem',
            fontFamily: 'Syne, sans-serif',
            boxShadow: '0 0 30px rgba(0,230,118,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 0 50px rgba(0,230,118,0.6)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0 30px rgba(0,230,118,0.4)'; }}
          >
            Get Funded
          </a>
          <a href="#programs" style={{
            border: '1.5px solid rgba(255,255,255,0.2)', color: '#fff',
            padding: '13px 30px', borderRadius: '8px',
            fontWeight: 600, fontSize: '0.95rem',
            fontFamily: 'Syne, sans-serif',
            transition: 'border-color 0.2s',
            display: 'inline-block',
          }}
            onMouseEnter={e => e.target.style.borderColor = '#00e676'}
            onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
          >
            Try Demo
          </a>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,0.7)',
        borderTop: '1px solid rgba(0,230,118,0.15)',
        backdropFilter: 'blur(10px)',
        overflow: 'hidden', height: '52px',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{
          display: 'flex', gap: '0',
          animation: 'ticker 30s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '0 30px',
              borderRight: '1px solid rgba(0,230,118,0.1)',
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '4px',
                background: 'rgba(0,230,118,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: 700, color: '#00e676',
                flexShrink: 0,
              }}>P</div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00e676', fontFamily: 'Syne, sans-serif' }}>{item.amount}</div>
                <div style={{ fontSize: '0.68rem', color: '#5a8a5e', lineHeight: 1 }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
