import { useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAuth, setShowAuth] = useState(false)

  return (
    <nav className="navbar">
      <a href="#hero"><img src={logo} alt="" style={{height:'150px',marginBottom:'20px'}}/></a>
      <div className="navbar-links">
        <a href="#programs">Programs</a>
        <a href="#pricing">Pricing</a>
        <a href="#trading-rules">Trading Rules</a>
        <a href="#faqs">FAQs</a>
        <a href="#affiliates">Affiliates</a>
      </div>
      <div className="navbar-auth">
        <button className="navbar-login" onClick={() => setShowAuth(true)}>Log in</button>
      </div>
      <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
      <div className={`mobile-menu ${!mobileMenuOpen ? 'hidden' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>✕</button>
        <a href="#programs" onClick={() => setMobileMenuOpen(false)}>Programs</a>
        <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        <a href="#trading-rules" onClick={() => setMobileMenuOpen(false)}>Trading Rules</a>
        <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
        <a href="#affiliates" onClick={() => setMobileMenuOpen(false)}>Affiliates</a>
        <button className="mobile-login-btn" onClick={() => { setMobileMenuOpen(false); setShowAuth(true) }}>Log in</button>
      </div>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </nav>
  )
}

function AuthModal({ onClose }) {
  const [view, setView] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault(); setError(''); setLoading(true)
    const url = view === 'login' ? '/api/auth/login' : '/api/auth/register'
    const body = view === 'login' ? { email, password } : { name, email, password }
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      if (view === 'login') { localStorage.setItem('token', data.token); onClose() }
      else { setSuccess('Account created! Please login.'); setView('login') }
    } catch(err) { setError(err.message) } finally { setLoading(false) }
  }

  const o={position:'fixed',inset:0,background:'rgba(0,0,0,0.85)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',padding:'20px'}
  const c={background:'#0a1a0e',border:'1px solid rgba(0,201,167,0.3)',borderRadius:'16px',padding:'40px 36px',width:'100%',maxWidth:'420px',position:'relative'}
  const i={width:'100%',padding:'12px 16px',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(0,201,167,0.2)',borderRadius:'8px',color:'#fff',fontSize:'14px',marginBottom:'12px',outline:'none',display:'block'}
  const b={width:'100%',padding:'13px',background:'#00C9A7',color:'#060907',border:'none',borderRadius:'50px',fontSize:'15px',fontWeight:'700',cursor:'pointer',marginTop:'8px'}
  return (
    <div style={o} onClick={onClose}>
      <div style={c} onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} style={{position:'absolute',top:'16px',right:'16px',background:'none',border:'none',color:'#fff',fontSize:'24px',cursor:'pointer'}}>×</button>
        <img src={logo} alt="" style={{height:'80px',marginBottom:'20px'}}/>
        <h2 style={{color:'#fff',fontSize:'22px',fontWeight:'700',marginBottom:'6px'}}>{view==='login'?'Welcome Back':'Create Account'}</h2>
        <p style={{color:'#888',fontSize:'13px',marginBottom:'24px'}}>{view==='login'?'Login to your Funded Master account':'Join Funded Master today'}</p>
        {error&&<div style={{background:'rgba(255,50,50,0.1)',border:'1px solid rgba(255,50,50,0.3)',borderRadius:'8px',padding:'10px',color:'#ff6b6b',fontSize:'13px',marginBottom:'12px'}}>{error}</div>}
        {success&&<div style={{background:'rgba(0,201,167,0.1)',border:'1px solid rgba(0,201,167,0.3)',borderRadius:'8px',padding:'10px',color:'#00C9A7',fontSize:'13px',marginBottom:'12px'}}>{success}</div>}
        <form onSubmit={submit}>
          {view==='register'&&<input style={i} type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required/>}
          <input style={i} type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input style={i} type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button style={b} type="submit" disabled={loading}>{loading?'Please wait...':(view==='login'?'Login':'Create Account')}</button>
        </form>
        <p style={{textAlign:'center',marginTop:'16px',color:'#888',fontSize:'13px'}}>
          {view==='login'?<>Don&apos;t have an account? <span style={{color:'#00C9A7',cursor:'pointer'}} onClick={()=>{setView('register');setError('');setSuccess('')}}>Register</span></>:<>Already have an account? <span style={{color:'#00C9A7',cursor:'pointer'}} onClick={()=>{setView('login');setError('');setSuccess('')}}>Login</span></>}
        </p>
      </div>
    </div>
  )
}

export default Navbar
