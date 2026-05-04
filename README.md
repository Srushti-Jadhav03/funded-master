# 🏛️ Funded Master — MERN Stack Trading Platform

A pixel-perfect conversion of the Funded Master Figma design into a full MERN stack web application.

---

## 📁 Project Structure

```
funded-master/
├── client/                   # React Frontend
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx         # Fixed nav with scroll effect
│       │   ├── Hero.jsx           # Hero + warrior SVG + ticker
│       │   ├── TradingAssets.jsx  # 5-card trading assets grid
│       │   ├── HowItWorks.jsx     # 3-step process + 3D plus
│       │   ├── Pricing.jsx        # Interactive pricing tabs
│       │   ├── WhyUs.jsx          # 6 reasons grid
│       │   ├── Calculator.jsx     # Earnings calculator + payouts
│       │   ├── Testimonials.jsx   # Masonry review grid
│       │   ├── FAQ.jsx            # Accordion FAQ
│       │   └── Footer.jsx         # CTA banner + footer
│       ├── pages/
│       │   └── HomePage.jsx       # Assembles all sections
│       ├── App.jsx
│       ├── index.js
│       └── index.css
│
└── server/                   # Express Backend
    ├── models/
    │   └── User.js            # MongoDB user model
    ├── routes/
    │   ├── auth.js            # Register / Login (JWT)
    │   ├── plans.js           # Trading plans API
    │   ├── payouts.js         # Recent payouts API
    │   └── contact.js         # Contact form API
    ├── index.js               # Express app entry
    ├── .env.example
    └── package.json
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)

### 1. Clone & Install
```bash
git clone <repo>
cd funded-master
npm run install-all
```

### 2. Configure Environment
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

### 3. Run Development
```bash
# From root directory — runs both frontend + backend
npm run dev

# Or separately:
npm run client    # React on http://localhost:3000
npm run server    # Express on http://localhost:5000
```

---

## 🔌 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login, returns JWT |
| GET | `/api/plans` | All trading plans |
| GET | `/api/plans/:type` | Plans by type (instant/1-step/2-step) |
| GET | `/api/payouts` | Recent trader payouts |
| POST | `/api/contact` | Submit contact form |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Green | `#00e676` |
| Background | `#060a07` |
| Card BG | `#0a1810` |
| Dark Section | `#07100a` |
| Text Primary | `#ffffff` |
| Text Muted | `#4a7a50` |
| Font Display | Syne (700, 800) |
| Font Body | DM Sans (400, 500, 600) |

---

## 🧩 Key Features

- ✅ **Pixel-perfect** Figma to React conversion
- ✅ **Interactive Pricing** — tab switcher (Instant/1-Step/2-Step/Sparatn) + account size selector
- ✅ **Live Earnings Calculator** — sliders update profit in real-time
- ✅ **Animated Hero** — warrior SVG + scrolling live payouts ticker
- ✅ **Scroll reveal** animations on all sections
- ✅ **Hover micro-interactions** on every card
- ✅ **JWT Authentication** ready (register/login)
- ✅ **MongoDB** integration via Mongoose
- ✅ **Responsive** mobile-first design
- ✅ **React Router** for navigation

---

## 🏗️ Production Build

```bash
cd client && npm run build
# Serves static files from /client/build
```

Add to `server/index.js` for production:
```js
const path = require('path');
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));
```

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v6 |
| Styling | Inline CSS + CSS animations |
| Backend | Node.js, Express 4 |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| Dev Tools | Concurrently, Nodemon |

---
