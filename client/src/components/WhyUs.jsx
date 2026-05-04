import React from 'react';

const reasons = [
  { icon: '$', title: 'Lower Spreads', desc: 'Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep interbank liquidity.' },
  { icon: '0', title: '$0 Minimum Acc Size', desc: "We don't believe in teasing you with lower costs and then making you pay extra for it. With Global Prime, you can start with as little or as much as you like." },
  { icon: '☰', title: 'Range of Markets', desc: 'Trade our 150+ range of global markets covering FX, Indices, Commodities, Cryptocurrency, and more.' },
  { icon: '💳', title: 'No Fees to Deposit', desc: 'We cover all your deposit fees on all 20+ funding methods. Fund with Visa, MasterCard, PayPal, Neteller, Skrill and more.' },
  { icon: '👤', title: '24/7 Support', desc: "The market never sleeps, so neither does our team. The Empire is here to help you on your trading journey all day, every day." },
  { icon: '🚀', title: 'Low Latency', desc: 'X-Connected low latency servers within the NY4 datacentre execute your trades with fast execution speeds from as low as 5ms.' },
];

export default function WhyUs() {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section style={{ padding: '80px 60px', background: '#060a07' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '50px',
        }}>
          Why We're <span style={{ color: '#00e676' }}>Top Rated PropFirm</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {reasons.map((r, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i
                  ? 'linear-gradient(135deg, #0d2018, #0a1810)'
                  : 'linear-gradient(135deg, #0a1810, #060e08)',
                border: `1px solid ${hovered === i ? 'rgba(0,230,118,0.3)' : 'rgba(0,230,118,0.1)'}`,
                borderRadius: '16px', padding: '28px 24px',
                transition: 'all 0.3s',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
                boxShadow: hovered === i ? '0 12px 40px rgba(0,230,118,0.1)' : 'none',
              }}
            >
              <div style={{
                width: '52px', height: '52px',
                background: 'rgba(0,230,118,0.1)',
                border: '1px solid rgba(0,230,118,0.2)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', marginBottom: '18px', color: '#00e676',
                fontWeight: 800, fontFamily: 'Syne, sans-serif',
              }}>{r.icon}</div>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{r.title}</h4>
              <p style={{ fontSize: '0.8rem', color: '#4a7a50', lineHeight: 1.65 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
