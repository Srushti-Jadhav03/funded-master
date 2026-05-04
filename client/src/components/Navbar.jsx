import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px', height: '68px',
    background: 'rgba(6,10,7,0.92)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0,230,118,0.1)',
    transition: 'background 0.3s',
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: '10px',
    fontFamily: 'Syne, sans-serif', fontWeight: 700,
    fontSize: '1.15rem', color: '#fff',
  },
  logoIcon: {
    width: '32px', height: '32px',
    background: 'linear-gradient(135deg, #00e676, #00c853)',
    borderRadius: '6px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1rem',
  },
  links: {
    display: 'flex', alignItems: 'center', gap: '36px',
  },
  link: {
    color: '#a0bfa3', fontSize: '0.88rem', fontWeight: 500,
    textDecoration: 'none', transition: 'color 0.2s',
    cursor: 'pointer',
  },
  activeLink: {
    color: '#00e676',
  },
  loginBtn: {
    display: 'flex', alignItems: 'center', gap: '8px',
    background: 'transparent',
    border: '1.5px solid rgba(0,230,118,0.5)',
    color: '#fff', padding: '8px 20px',
    borderRadius: '8px', fontSize: '0.88rem', fontWeight: 600,
    cursor: 'pointer', transition: 'all 0.2s',
    fontFamily: 'DM Sans, sans-serif',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Trading Rules', href: '#rules' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Affiliates', href: '#affiliates' },
  ];

  return (
    <nav style={{ ...styles.nav, background: scrolled ? 'rgba(6,10,7,0.98)' : 'rgba(6,10,7,0.0)', borderBottom: scrolled ? '1px solid rgba(0,230,118,0.1)' : '1px solid transparent' }}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>⬡</div>
        Funded Master
      </div>

      <div style={styles.links}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            style={{ ...styles.link, ...(activeLink === link.label ? styles.activeLink : {}) }}
            onClick={() => setActiveLink(link.label)}
            onMouseEnter={e => e.target.style.color = '#00e676'}
            onMouseLeave={e => e.target.style.color = activeLink === link.label ? '#00e676' : '#a0bfa3'}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        style={styles.loginBtn}
        onMouseEnter={e => { e.target.style.background = 'rgba(0,230,118,0.1)'; e.target.style.borderColor = '#00e676'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(0,230,118,0.5)'; }}
      >
        Log in 👤
      </button>
    </nav>
  );
}
