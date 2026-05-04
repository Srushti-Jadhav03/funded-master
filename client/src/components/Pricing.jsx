import React, { useState } from 'react';

const tabs = ['Instant', '1-Step', '2-Step', 'Sparatn'];
const sizes = ['$25K', '$50K', '$100K'];

const planPrices = {
  'Instant': { '$25K': 197, '$50K': 297, '$100K': 497 },
  '1-Step':  { '$25K': 149, '$50K': 249, '$100K': 399 },
  '2-Step':  { '$25K': 119, '$50K': 199, '$100K': 349 },
  'Sparatn': { '$25K': 89,  '$50K': 159, '$100K': 279 },
};

const verificationRules = {
  'Instant': { daily: '2%', overall: '10%', minDays: '3 Days', leverage: '30:1' },
  '1-Step':  { daily: '3%', overall: '10%', minDays: '1 Day',  leverage: '20:1' },
  '2-Step':  { daily: '4%', overall: '8%',  minDays: '5 Days', leverage: '10:1' },
  'Sparatn': { daily: '5%', overall: '12%', minDays: '0 Days', leverage: '50:1' },
};

const liveRules = {
  'Instant': { payout: '90%', daily: '4%', overall: '6%', freq: '14 days', period: 'Unlimited' },
  '1-Step':  { payout: '85%', daily: '5%', overall: '8%', freq: '7 days',  period: 'Unlimited' },
  '2-Step':  { payout: '80%', daily: '4%', overall: '6%', freq: '14 days', period: 'Unlimited' },
  'Sparatn': { payout: '95%', daily: '5%', overall: '10%',freq: '7 days',  period: 'Unlimited' },
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('Instant');
  const [activeSize, setActiveSize] = useState('$50K');

  const price = planPrices[activeTab][activeSize];
  const vr = verificationRules[activeTab];
  const lr = liveRules[activeTab];

  return (
    <section id="pricing" style={{ padding: '80px 60px', background: '#060a07' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: 800, color: '#fff', marginBottom: '8px',
        }}>
          Become an <span style={{ color: '#00e676' }}>Master Trader</span>
        </h2>
        <p style={{ color: '#5a8a60', fontSize: '0.9rem', marginBottom: '36px' }}>
          Choose the evaluation based on your preference to become an Empire Trader.
        </p>

        {/* Top row: tabs + popular card */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '30px', alignItems: 'start', marginBottom: '30px' }}>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#7aad80', marginBottom: '12px', fontWeight: 600 }}>Choose your Trading Path</p>
            {/* Path tabs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '9px 22px', borderRadius: '8px',
                    fontFamily: 'Syne, sans-serif', fontSize: '0.88rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s', border: 'none',
                    background: activeTab === tab ? '#00e676' : 'rgba(0,230,118,0.08)',
                    color: activeTab === tab ? '#000' : '#7aad80',
                    boxShadow: activeTab === tab ? '0 0 20px rgba(0,230,118,0.3)' : 'none',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <p style={{ fontSize: '0.8rem', color: '#7aad80', marginBottom: '12px', fontWeight: 600 }}>Select Account Size</p>
            <div style={{
              display: 'flex', gap: '10px',
              border: '1px solid rgba(0,230,118,0.15)',
              borderRadius: '10px', padding: '6px',
              width: 'fit-content',
            }}>
              {sizes.map(sz => (
                <button
                  key={sz}
                  onClick={() => setActiveSize(sz)}
                  style={{
                    padding: '10px 28px', borderRadius: '7px',
                    fontFamily: 'Syne, sans-serif', fontSize: '0.9rem', fontWeight: 700,
                    cursor: 'pointer', transition: 'all 0.2s', border: 'none',
                    background: activeSize === sz ? '#00e676' : 'transparent',
                    color: activeSize === sz ? '#000' : '#7aad80',
                  }}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Popular price card */}
          <div style={{
            background: 'linear-gradient(135deg, #0d2018, #081408)',
            border: '1px solid rgba(0,230,118,0.3)',
            borderRadius: '16px', padding: '28px 32px',
            textAlign: 'center', minWidth: '220px',
            boxShadow: '0 0 40px rgba(0,230,118,0.1)',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(0,230,118,0.15)', border: '1px solid rgba(0,230,118,0.3)',
              borderRadius: '20px', padding: '4px 14px',
              fontSize: '0.72rem', fontWeight: 700, color: '#00e676',
              marginBottom: '16px', letterSpacing: '0.05em',
            }}>🔥 MOST POPULAR</div>
            <p style={{ fontSize: '0.75rem', color: '#7aad80', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              START NOW AT ONLY
            </p>
            <div style={{
              fontFamily: 'Syne, sans-serif', fontSize: '3rem',
              fontWeight: 800, color: '#fff', lineHeight: 1,
              marginBottom: '20px',
            }}>
              ${price}
            </div>
            <button style={{
              width: '100%', padding: '13px',
              background: '#00e676', color: '#000',
              border: 'none', borderRadius: '8px',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem',
              cursor: 'pointer',
            }}>Get Funded</button>
          </div>
        </div>

        {/* Rules Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Verification */}
          <div style={{
            background: '#080f0a', border: '1px solid rgba(0,230,118,0.1)',
            borderRadius: '14px', padding: '28px',
          }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#5a8a60', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>1. VERIFICATION</p>
            <p style={{ fontSize: '0.78rem', color: '#3a6040', lineHeight: 1.6, marginBottom: '20px' }}>
              Choose a simulated account size and try to reach the minimum simulated gains target. Trade all available instruments.
            </p>
            {[
              { label: 'Max Daily Drawdown', value: vr.daily },
              { label: 'Max Overall Drawdown', value: vr.overall },
              { label: 'Minimum Profitable Days', value: vr.minDays },
              { label: 'Sim Trading Leverage', value: vr.leverage },
            ].map((r, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 0', borderBottom: '1px solid rgba(0,230,118,0.07)',
              }}>
                <span style={{ fontSize: '0.8rem', color: '#5a8a60', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#00e676' }}>↘</span> {r.label}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'Syne, sans-serif' }}>{r.value}</span>
              </div>
            ))}
          </div>

          {/* Live Simulated */}
          <div style={{
            background: '#080f0a', border: '1px solid rgba(0,230,118,0.1)',
            borderRadius: '14px', padding: '28px',
          }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#5a8a60', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>2. LIVE SIMULATED TRADER</p>
            <p style={{ fontSize: '0.78rem', color: '#3a6040', lineHeight: 1.6, marginBottom: '20px' }}>
              You can now start trading on a simulated basis in the EmpireTrading program without simulated gain targets.
            </p>
            {[
              { label: 'Payout Share', value: lr.payout, highlight: true },
              { label: 'Max Daily Drawdown', value: lr.daily },
              { label: 'Max Overall Drawdown', value: lr.overall },
              { label: 'Payout Frequency', value: lr.freq },
              { label: 'Trading Period', value: lr.period },
            ].map((r, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 0', borderBottom: '1px solid rgba(0,230,118,0.07)',
              }}>
                <span style={{ fontSize: '0.8rem', color: '#5a8a60', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#00e676' }}>%</span> {r.label}
                </span>
                <span style={{
                  fontSize: '0.85rem', fontWeight: 700,
                  fontFamily: 'Syne, sans-serif',
                  color: r.highlight ? '#000' : '#fff',
                  background: r.highlight ? '#00e676' : 'transparent',
                  padding: r.highlight ? '2px 10px' : '0',
                  borderRadius: r.highlight ? '4px' : '0',
                }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          marginTop: '24px',
          background: 'linear-gradient(90deg, rgba(0,230,118,0.08), rgba(0,230,118,0.15), rgba(0,230,118,0.08))',
          border: '1px solid rgba(0,230,118,0.2)',
          borderRadius: '12px', padding: '18px 30px',
          textAlign: 'center',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        }}>
          <span style={{ fontSize: '1.1rem' }}>💰</span>
          <span style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700,
            fontSize: '1rem', color: '#fff',
          }}>Get Paid in 48 Hours or Get $2000!</span>
          <span style={{ fontSize: '1.1rem' }}>💰</span>
        </div>
      </div>
    </section>
  );
}
