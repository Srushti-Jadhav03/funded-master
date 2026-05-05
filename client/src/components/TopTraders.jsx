import './TopTraders.css'

const traders = [
  { name: 'John Bartlett', country: 'Poland', amount: '$3,423.39', time: '1 Hour', active: false },
  { name: 'Thomas Vargas', country: 'Austria', amount: '$9,423.39', time: '4 Hours', active: true },
  { name: 'James Colon', country: 'Norway', amount: '$14,291.76', time: '8 Hours', active: true },
  { name: 'Joseph Hurst', country: 'Poland', amount: '$1,117.97', time: '6 Hours', active: false },
  { name: 'Richard Miles', country: 'Iraq', amount: '$6,142.12', time: '20 Hours', active: false },
]

function TopTraders() {
  const doubled = [...traders, ...traders]
  return (
    <section className="top-traders-section">
      <div className="top-traders-inner">
        <div className="traders-left">
          <h2 className="traders-heading">Rewarding Our<br />Best Traders</h2>
          <p className="traders-subtitle">Choose the evaluation based on your preference to become a Master Trader.</p>
          <div className="stats-row">
            <div className="stat-item"><span className="stat-value">$2.7M+</span><span className="stat-label">Total Payouts</span></div>
            <div className="stat-item"><span className="stat-value">$5K+</span><span className="stat-label">Total Traders</span></div>
            <div className="stat-item"><span className="stat-value">5hrs</span><span className="stat-label">Avg. Payout time</span></div>
          </div>
        </div>
        <div className="traders-right">
          <div className="traders-scroll">
            {doubled.map((t, i) => (
              <div key={i} className={`trader-card ${t.active ? 'active' : ''}`}>
                <div className={`avatar-circle ${t.active ? 'avatar-active' : ''}`}>{t.name.charAt(0)}</div>
                <div className="trader-info">
                  <div className="trader-name">{t.name}</div>
                  <div className="trader-country">{t.country}</div>
                </div>
                <div className="trader-right">
                  <span className="trader-amount">{t.amount}</span>
                  <span className={`time-badge ${t.active ? 'active' : 'inactive'}`}>{t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default TopTraders
