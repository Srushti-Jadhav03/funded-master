import React, { useState } from 'react';

const faqs = [
  { q: 'What is Empire Trading?', a: 'To win the game, you need strong support and diligent preparation. Join For Traders Community.' },
  { q: 'Who can apply?', a: 'Any trader above 18 years old from any country can apply. You only need a valid ID and basic trading experience.' },
  { q: 'How does funding work?', a: 'Complete the challenge phase, receive your funded account, and start trading to earn profit splits directly to your account.' },
  { q: 'Which markets can I trade?', a: 'Trade Forex, Indices, Commodities, Cryptocurrency, and more — over 150 instruments available.' },
  { q: 'How do you help manage risk?', a: 'We set clear drawdown rules and provide a dashboard to monitor your risk in real-time.' },
  { q: 'Do you offer resources for new traders?', a: 'Yes! We offer webinars, tutorials, and a trader community to help you succeed.' },
  { q: 'How fast are payouts?', a: 'Payouts are processed within 5 hours on average. The fastest payout recorded was 1 hour.' },
  { q: 'What trading platforms do you support?', a: 'We support MetaTrader 4 (MT4), MetaTrader 5 (MT5), and cTrader on desktop, web, and mobile.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding: '80px 60px', background: '#07100a' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
            Frequently Asked <span style={{ color: '#00e676' }}>Questions</span>
          </h2>
          <p style={{ color: '#4a7a50', fontSize: '0.9rem' }}>I know... just like you many traders have these questions,<br />so here are the answers!</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                background: open === i ? 'linear-gradient(135deg, #0d2018, #081408)' : '#0a1810',
                border: `1px solid ${open === i ? 'rgba(0,230,118,0.35)' : 'rgba(0,230,118,0.1)'}`,
                borderRadius: '10px', overflow: 'hidden', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '18px 24px',
              }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontSize: '0.92rem', fontWeight: 600,
                  color: open === i ? '#00e676' : '#c8e6cb',
                }}>{faq.q}</span>
                <span style={{
                  color: '#00e676', fontSize: '1.3rem', fontWeight: 300,
                  transition: 'transform 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                  flexShrink: 0, marginLeft: '12px',
                }}>+</span>
              </div>
              {open === i && (
                <div style={{ padding: '0 24px 18px', fontSize: '0.85rem', color: '#5a8a60', lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
