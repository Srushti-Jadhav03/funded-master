import React from 'react';

const steps = [
  { num: '01', title: 'Challenge Phase', desc: 'Choose a Challenge account and showcase your skills.' },
  { num: '02', title: 'Get Funded Account', desc: 'Pass your challenge and get a simulated funded account.' },
  { num: '03', title: 'Get Rewarded', desc: 'Earn your share of the profits and receive your payout within 24 hrs.' },
];

export default function HowItWorks() {
  return (
    <section id="rules" style={{ background: '#07100a', padding: '80px 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* HOW IT WORKS label */}
        <p style={{
          color: '#00e676', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px',
        }}>HOW IT WORKS</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'start', marginBottom: '60px' }}>
          <div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '20px',
            }}>
              Maximum Profit &amp;<br />
              Secure <span style={{ color: '#00e676' }}>Trading Platform</span>
            </h2>
            <p style={{ color: '#5a8a60', fontSize: '0.9rem', maxWidth: '380px', marginBottom: '28px' }}>
              Choose the evaluation based on your preference to become an Empire Trader.
            </p>
            <a href="#pricing" style={{
              display: 'inline-block',
              background: '#00e676', color: '#000',
              padding: '12px 28px', borderRadius: '8px',
              fontWeight: 700, fontSize: '0.9rem',
              fontFamily: 'Syne, sans-serif',
            }}>Get Funded</a>
          </div>

          {/* 3D cross/plus visual */}
          <div style={{ position: 'relative', width: '220px', height: '220px', flexShrink: 0 }}>
            <svg viewBox="0 0 200 200" style={{ width: '100%', filter: 'drop-shadow(0 0 30px rgba(0,230,118,0.4))' }}>
              <defs>
                <linearGradient id="plusGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3a8a5a" />
                  <stop offset="100%" stopColor="#1a4a2a" />
                </linearGradient>
                <linearGradient id="plusGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2a6a4a" />
                  <stop offset="100%" stopColor="#0d2a1a" />
                </linearGradient>
                <linearGradient id="plusGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00e676" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00c853" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Top arm */}
              <rect x="75" y="10" width="50" height="85" rx="8" fill="url(#plusGrad1)" />
              {/* Bottom arm */}
              <rect x="75" y="105" width="50" height="85" rx="8" fill="url(#plusGrad2)" />
              {/* Left arm */}
              <rect x="10" y="75" width="85" height="50" rx="8" fill="url(#plusGrad2)" />
              {/* Right arm */}
              <rect x="105" y="75" width="85" height="50" rx="8" fill="url(#plusGrad1)" />
              {/* Center highlight */}
              <rect x="75" y="75" width="50" height="50" fill="url(#plusGrad3)" />
              {/* Glow lines */}
              <rect x="97" y="10" width="6" height="180" fill="rgba(0,230,118,0.15)" />
              <rect x="10" y="97" width="180" height="6" fill="rgba(0,230,118,0.15)" />
            </svg>
          </div>
        </div>

        {/* 3 step cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, #0a1810, #060e08)',
              border: '1px solid rgba(0,230,118,0.12)',
              borderRadius: '14px', padding: '28px 24px',
            }}>
              <div style={{
                width: '44px', height: '44px',
                background: 'rgba(0,230,118,0.1)',
                border: '1px solid rgba(0,230,118,0.2)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                {i === 0 ? '🏆' : i === 1 ? '🏦' : '💰'}
              </div>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{step.title}</h4>
              <p style={{ fontSize: '0.82rem', color: '#5a8a60', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
