import React, { useState } from 'react';

const payouts = [
  { name: 'John Bartlett', country: 'Poland', amount: '$3,423.39', time: '1 Hour', avatar: 'JB' },
  { name: 'Thomas Vargas', country: 'Austria', amount: '$9,423.39', time: '4 Hours', avatar: 'TV' },
  { name: 'James Colon', country: 'Norway', amount: '$14,291.76', time: '8 Hours', avatar: 'JC' },
  { name: 'Joseph Hurst', country: 'Poland', amount: '$1,117.97', time: '6 Hours', avatar: 'JH' },
  { name: 'Richard Miles', country: 'Iraq', amount: '$6,142.12', time: '20 Hours', avatar: 'RM' },
];

const accSizes = [10000, 25000, 50000, 100000, 200000];
const accLabels = ['$10K', '$25K', '$50K', '$100K', '$200K'];

export default function Calculator() {
  const [accIdx, setAccIdx] = useState(3); // $100K default
  const [rate, setRate] = useState(18);

  const accSize = accSizes[accIdx];
  const monthly = Math.round(accSize * (rate / 100) * 0.95);

  return (
    <section style={{ padding: '80px 60px', background: '#07100a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Title */}
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '8px',
        }}>
          How much can you <span style={{ color: '#00e676' }}>Earn with Us?</span>
        </h2>
        <p style={{ color: '#4a7a50', fontSize: '0.9rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto 50px' }}>
          Discover the potential to earn your desired income through trading without risking your own capital:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Calculator Left */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#7aad80', marginBottom: '12px' }}>Account Size</p>
              {/* Custom slider with labels */}
              <input
                type="range" min="0" max="4" step="1" value={accIdx}
                onChange={e => setAccIdx(+e.target.value)}
                style={{ width: '100%', accentColor: '#00e676', height: '4px', marginBottom: '8px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {accLabels.map((l, i) => (
                  <span key={i} style={{
                    fontSize: '0.7rem',
                    color: i === accIdx ? '#00e676' : '#4a7a50',
                    fontWeight: i === accIdx ? 800 : 400,
                    fontFamily: 'Syne, sans-serif',
                  }}>{l}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#7aad80', marginBottom: '12px' }}>Monthly Profit Rate</p>
              <input
                type="range" min="1" max="30" step="1" value={rate}
                onChange={e => setRate(+e.target.value)}
                style={{ width: '100%', accentColor: '#00e676', height: '4px', marginBottom: '8px' }}
              />
              <div style={{
                display: 'inline-block',
                background: '#00e676', color: '#000',
                padding: '2px 10px', borderRadius: '4px',
                fontSize: '0.78rem', fontWeight: 800, fontFamily: 'Syne, sans-serif',
              }}>{rate}%</div>
            </div>

            <a href="#pricing" style={{
              display: 'block', textAlign: 'center',
              background: '#00e676', color: '#000',
              padding: '14px', borderRadius: '8px',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem',
            }}>Get Funded</a>
          </div>

          {/* Result box right */}
          <div style={{
            background: 'linear-gradient(135deg, #0d2018, #081408)',
            border: '1px solid rgba(0,230,118,0.25)',
            borderRadius: '16px', padding: '36px',
            textAlign: 'center',
            boxShadow: '0 0 60px rgba(0,230,118,0.08)',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#7aad80', marginBottom: '8px' }}>
              Your total profit with<br />
              <strong style={{ color: '#fff' }}>95% Profit Split.</strong>
            </p>
            <div style={{
              fontFamily: 'Syne, sans-serif', fontSize: '3.2rem',
              fontWeight: 800, color: '#fff', marginTop: '16px',
            }}>
              ${monthly.toLocaleString()}
              <span style={{ fontSize: '1rem', color: '#5a8a60', fontWeight: 400 }}>/month</span>
            </div>
          </div>
        </div>

        {/* Rewarding Traders section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '80px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.2 }}>
              Rewarding Our<br />Best Traders
            </h2>
            <p style={{ color: '#4a7a50', fontSize: '0.85rem', marginBottom: '28px' }}>
              Choose the evaluation based on your preference to become a Master Trader.
            </p>
            <div style={{ display: 'flex', gap: '32px' }}>
              {[
                { val: '$2.7M+', label: 'Total Payouts' },
                { val: '$5K+', label: 'Total Traders' },
                { val: '5hrs', label: 'Avg.Payout time' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#00e676' }}>{s.val}</div>
                  <div style={{ fontSize: '0.75rem', color: '#4a7a50' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Payouts list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {payouts.map((p, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: '#0a1810', border: '1px solid rgba(0,230,118,0.1)',
                borderRadius: '12px', padding: '14px 18px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: 'rgba(0,230,118,0.08)',
                    border: '1px solid rgba(0,230,118,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700, color: '#7aad80',
                    fontFamily: 'Syne, sans-serif',
                  }}>T</div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', fontFamily: 'Syne, sans-serif' }}>{p.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#4a7a50' }}>{p.country}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.95rem', fontWeight: 800, color: '#fff' }}>{p.amount}</div>
                  <div style={{
                    fontSize: '0.65rem', background: 'rgba(0,230,118,0.15)',
                    color: '#00e676', padding: '1px 8px', borderRadius: '4px',
                    fontWeight: 600,
                  }}>{p.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
