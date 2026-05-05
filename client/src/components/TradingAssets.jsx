import iconChallenge from '../assets/icon-challenge.png'
import iconLightning from '../assets/icon-lightning.png'
import iconNews from '../assets/icon-news.png'
import iconTarget from '../assets/icon-target.png'
import iconProfit from '../assets/icon-profit.png'
import './TradingAssets.css'

function TradingAssets() {
  return (
    <section id="programs" className="trading-assets">
      <div className="inner-wrapper">
        <h2 className="section-heading">Multiple Trading <span className="highlight">Assets</span></h2>
        <p className="section-subheading">Trade in the following markets:</p>
        <div className="cards-container">
          <div className="row-1-wrapper">
            {[
              { icon: iconProfit, title: 'Up to 100% Profit Splits', desc: 'Keep every dollar you earn—Our funding model lets you keep up to 100% of your profits.' },
              { icon: iconChallenge, title: '1-Step Challenge', desc: 'One clear target, one easy step—prove your skills and unlock funding with no extra steps.' },
              { icon: iconLightning, title: 'Lightning Fast Payouts', desc: 'Trade hard today, spend tomorrow—experience truly lightning fast payouts.' },
            ].map((card, i) => (
              <div className="card-wrapper" key={i}>
                <div className="icon-wrapper-above"><img src={card.icon} alt={card.title} className="icon-img" /></div>
                <div className="card type-b">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row-2-wrapper">
            {[
              { icon: iconNews, title: 'Trade News Freely', desc: 'Earn your share of the profits and receive your payout within 24 hrs.' },
              { icon: iconTarget, title: '6% Profit Target', desc: 'Hit your mark effortlessly with our ultra-low 6% profit target. Less stress, more trading.' },
            ].map((card, i) => (
              <div className="card-wrapper" key={i}>
                <div className="icon-wrapper-above"><img src={card.icon} alt={card.title} className="icon-img" /></div>
                <div className="card type-b card-half">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default TradingAssets
