import React from 'react';

const reviews = [
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Great!', text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout." },
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Great and fast answers to my questions', text: "Great and fast answers to my questions. Doberman was fantastic and professional answered my questions and the response time was like 2 minutes even though they say 20." },
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Great Customer Service', text: "Best company no problem so far. Hope to get a payout soon" },
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Great Customer Service', text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout." },
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Great Customer Service', text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout." },
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Great Customer Service', text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout." },
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Best company no problem so far.', text: "Best company no problem so far. Hope to get a payout soon" },
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Great Customer Service', text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout." },
  { name: 'Karan Gupta', time: '16 hours ago', title: 'Support team is best I ever seen and...', text: "Support team is best I ever seen and really helpful and resolve issue quickly" },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '80px 60px', background: '#060a07' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00e676', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>TESTIMONIALS</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            <span style={{ color: '#00e676' }}>Trust Us</span> - You're In Safe Hands
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontWeight: 600, color: '#fff' }}>Excellent</span>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[1,2,3,4].map(i => <span key={i} style={{ color: '#00e676', fontSize: '1.2rem' }}>★</span>)}
              <span style={{ color: '#00e676', fontSize: '1.2rem', opacity: 0.6 }}>★</span>
            </div>
          </div>
          <p style={{ color: '#4a7a50', fontSize: '0.82rem' }}>Rated 4.8 / 5 based on 4,258 reviews on</p>
        </div>

        <div style={{ columns: '3', columnGap: '16px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              breakInside: 'avoid', marginBottom: '16px',
              background: '#0a1810', border: '1px solid rgba(0,230,118,0.1)',
              borderRadius: '12px', padding: '20px',
            }}>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '8px' }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#00e676', fontSize: '0.75rem' }}>★</span>)}
              </div>
              <p style={{ fontSize: '0.72rem', color: '#4a7a50', marginBottom: '8px' }}>{r.name} · {r.time}</p>
              <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginBottom: '8px', fontFamily: 'Syne, sans-serif' }}>{r.title}</p>
              <p style={{ fontSize: '0.78rem', color: '#5a8a60', lineHeight: 1.6 }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
