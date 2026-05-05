import { useState } from 'react'
import './EarningsCalculator.css'

const accSizes = [10000, 25000, 50000, 100000, 200000]
const accLabels = ['$10K', '$25K', '$50K', '$100K', '$200K']

function EarningsCalculator() {
  const [accIdx, setAccIdx] = useState(3)
  const [rate, setRate] = useState(18)

  const accSize = accSizes[accIdx]
  const monthly = Math.round(accSize * (rate / 100) * 0.95)
  const bubbleLeft = `${((rate - 1) / 29) * 100}%`

  return (
    <section className="earnings-section">
      <div className="bg-glow"></div>
      <h2 className="earnings-heading">How much can you <span className="highlight">Earn with Us?</span></h2>
      <p className="earnings-subtitle">Discover the potential to earn your desired income through trading without risking your own capital.</p>
      <div className="earnings-layout">
        <div className="sliders-container">
          <div className="slider-group">
            <p className="slider-label">Account Size</p>
            <input type="range" className="slider" min="0" max="4" step="1" value={accIdx}
              onChange={e => setAccIdx(+e.target.value)}
              style={{ background: `linear-gradient(to right, #00C9A7 ${(accIdx/4)*100}%, #333 ${(accIdx/4)*100}%)` }}
            />
            <div className="slider-scale">
              {accLabels.map((l, i) => (
                <span key={i} className={`scale-label ${i === accIdx ? 'active' : ''}`}>{l}</span>
              ))}
            </div>
          </div>
          <div className="slider-group">
            <p className="slider-label">Monthly Profit Rate</p>
            <div className="bubble-wrapper">
              <div className="bubble" style={{ left: bubbleLeft }}>{rate}%</div>
            </div>
            <input type="range" className="slider" min="1" max="30" step="1" value={rate}
              onChange={e => setRate(+e.target.value)}
              style={{ background: `linear-gradient(to right, #00C9A7 ${((rate-1)/29)*100}%, #333 ${((rate-1)/29)*100}%)` }}
            />
          </div>
        </div>
        <div className="result-card">
          <p className="result-text">Your total profit with<br /><strong>95% Profit Split.</strong></p>
          <div className="profit-amount">${monthly.toLocaleString()}<span className="per-month">/month</span></div>
          <button className="get-funded-btn" onClick={() => document.getElementById('pricing')?.scrollIntoView()}>Get Funded</button>
        </div>
      </div>
    </section>
  )
}
export default EarningsCalculator
