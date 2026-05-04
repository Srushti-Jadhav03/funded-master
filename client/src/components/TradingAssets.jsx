import React from 'react';

const assets = [
  {
    icon: '📈',
    title: 'Up to 100% Profit Splits',
    desc: 'Keep every dollar you earn—Our funding model lets you keep up to 100% of your profits.',
    wide: false,
  },
  {
    icon: '🎯',
    title: '1-Step Challenge',
    desc: 'One clear target, one easy step—prove your skills and unlock funding with no extra steps.',
    wide: false,
  },
  {
    icon: '⚡',
    title: 'Lightning Fast Payouts',
    desc: 'Trade hard today, spend tomorrow—experience truly lightning fast payouts.',
    wide: false,
  },
  {
    icon: '📰',
    title: 'Trade News Freely',
    desc: 'Earn your share of the profits and receive your payout within 24 hrs.',
    wide: true,
  },
  {
    icon: '🎯',
    title: '6% Profit Target',
    desc: 'Hot your mark effortlessly with our Ultra-low 6% profit target. Less stress, more trading.',
    wide: true,
  },
];

export default function TradingAssets() {
  return (
    <section id="programs" style={{ padding: '100px 60px', background: '#060a07' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800, color: '#fff', marginBottom: '12px',
        }}>
          Multiple Trading <span style={{ color: '#00e676' }}>Assets</span>
        </h2>
        <p style={{ color: '#6a9b6e', fontSize: '0.95rem' }}>Trade in the following markets:</p>
      </div>

      {/* Row 1 - 3 cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px', maxWidth: '900px', margin: '0 auto 16px' }}>
        {assets.slice(0, 3).map((a, i) => (
          <AssetCard key={i} asset={a} />
        ))}
      </div>

      {/* Row 2 - 2 wider cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
        {assets.slice(3).map((a, i) => (
          <AssetCard key={i} asset={a} />
        ))}
      </div>
    </section>
  );
}

function AssetCard({ asset }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'linear-gradient(135deg, #0d2018, #0a1810)' : 'linear-gradient(135deg, #0a1810, #060e08)',
        border: `1px solid ${hovered ? 'rgba(0,230,118,0.35)' : 'rgba(0,230,118,0.12)'}`,
        borderRadius: '16px',
        padding: '28px 24px',
        transition: 'all 0.3s',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 8px 32px rgba(0,230,118,0.1)' : 'none',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top icon */}
      <div style={{
        width: '52px', height: '52px',
        background: 'rgba(0,230,118,0.1)',
        border: '1px solid rgba(0,230,118,0.2)',
        borderRadius: '12px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', marginBottom: '16px',
        position: 'absolute', top: '20px', right: '20px',
      }}>
        {asset.icon}
      </div>
      <h3 style={{
        fontFamily: 'Syne, sans-serif', fontSize: '1.05rem',
        fontWeight: 700, color: '#fff', marginBottom: '10px',
        paddingRight: '64px',
      }}>{asset.title}</h3>
      <p style={{ fontSize: '0.82rem', color: '#5a8a60', lineHeight: 1.6 }}>{asset.desc}</p>
    </div>
  );
}
