# 🏛️ Funded Master — MERN Stack Trading Platform

**Funded Master** is a modern, responsive trading platform built using the **MERN Stack**. The project transforms a professional Figma design into a fully functional web application with interactive pricing plans, an earnings calculator, authentication, trading information, and a responsive user interface.

🌐 **Live Website:** https://funded-master-one.vercel.app
💻 **GitHub Repository:** https://github.com/Srushti-Jadhav03/funded-master

---

## 📌 About the Project

Funded Master is a full-stack web application designed to provide a modern trading-platform experience.

The project focuses on converting a detailed **Figma UI design into a functional MERN application**, while maintaining responsive layouts, smooth animations, reusable React components, backend APIs, authentication, and MongoDB integration.

The application includes multiple interactive sections such as trading assets, pricing plans, earnings calculations, payouts, testimonials, FAQs, and contact functionality.

---

## ✨ Key Features

### 🎨 Frontend

* Pixel-perfect **Figma to React** implementation
* Modern and responsive user interface
* Mobile-first responsive design
* Animated hero section
* Smooth scroll reveal animations
* Card hover micro-interactions
* Reusable React components
* React Router based navigation

### 💰 Trading & Pricing

* Interactive trading pricing plans
* Multiple challenge types

  * Instant
  * 1-Step
  * 2-Step
  * Spartan
* Account size selection
* Dynamic pricing updates
* Trading asset showcase

### 🧮 Earnings Calculator

* Interactive earnings calculator
* Slider-based calculations
* Real-time profit updates
* Payout estimation

### 🔐 Authentication

* User Registration
* User Login
* JWT-based authentication
* Password hashing using bcrypt
* MongoDB user storage

### 📊 Additional Features

* Recent trader payouts
* Testimonials section
* FAQ accordion
* Contact form
* Call-to-action sections
* Responsive navigation bar
* Footer with platform information

---

## 🛠️ Tech Stack

| Technology       | Purpose                             |
| ---------------- | ----------------------------------- |
| **React.js**     | Frontend Development                |
| **React Router** | Client-side Routing                 |
| **Node.js**      | Backend Runtime                     |
| **Express.js**   | Backend Framework                   |
| **MongoDB**      | Database                            |
| **Mongoose**     | MongoDB ODM                         |
| **JWT**          | Authentication                      |
| **bcryptjs**     | Password Hashing                    |
| **CSS**          | Styling & Animations                |
| **Nodemon**      | Development Server                  |
| **Concurrently** | Running Frontend & Backend Together |
| **Vercel**       | Application Deployment              |

---

## 📂 Project Structure

```text
funded-master/
│
├── client/                       # React Frontend
│   │
│   ├── public/
│   │   └── index.html
│   │
│   └── src/
│       │
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── TradingAssets.jsx
│       │   ├── HowItWorks.jsx
│       │   ├── Pricing.jsx
│       │   ├── WhyUs.jsx
│       │   ├── Calculator.jsx
│       │   ├── Testimonials.jsx
│       │   ├── FAQ.jsx
│       │   └── Footer.jsx
│       │
│       ├── pages/
│       │   └── HomePage.jsx
│       │
│       ├── App.jsx
│       ├── index.js
│       └── index.css
│
├── server/                       # Node.js + Express Backend
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── plans.js
│   │   ├── payouts.js
│   │   └── contact.js
│   │
│   ├── index.js
│   ├── .env.example
│   └── package.json
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js v18+
* npm
* MongoDB locally or MongoDB Atlas
* Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/Srushti-Jadhav03/funded-master.git
```

Navigate to the project:

```bash
cd funded-master
```

---

### 2. Install Dependencies

Install both frontend and backend dependencies:

```bash
npm run install-all
```

---

### 3. Configure Environment Variables

Navigate to the server directory:

```bash
cd server
```

Create a `.env` file based on:

```text
.env.example
```

Add the required environment variables such as:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> ⚠️ Never commit your actual `.env` file or database credentials to GitHub.

---

### 4. Run the Application

From the root directory:

```bash
npm run dev
```

This runs both the React frontend and Express backend.

Or run them separately:

```bash
npm run client
```

Frontend:

```text
http://localhost:3000
```

Backend:

```bash
npm run server
```

Backend API:

```text
http://localhost:5000
```

---

## 🔌 API Endpoints

| Method | Endpoint             | Description                       |
| ------ | -------------------- | --------------------------------- |
| `POST` | `/api/auth/register` | Register a new user               |
| `POST` | `/api/auth/login`    | Login user and return JWT         |
| `GET`  | `/api/plans`         | Get all trading plans             |
| `GET`  | `/api/plans/:type`   | Get plans based on challenge type |
| `GET`  | `/api/payouts`       | Get recent trader payouts         |
| `POST` | `/api/contact`       | Submit contact form               |

---

## 🔄 Application Flow

```text
User Visits Platform
        ↓
Explore Trading Assets
        ↓
View Trading Challenges
        ↓
Select Challenge Type
        ↓
Select Account Size
        ↓
View Pricing
        ↓
Calculate Potential Earnings
        ↓
Register / Login
        ↓
Explore Trading Platform
```

---

## 🎨 UI Highlights

The application includes several modern UI elements:

* Dark trading-themed interface
* Animated hero section
* Interactive pricing cards
* Earnings calculator
* Trading asset cards
* Responsive navigation
* Testimonials
* FAQ accordion
* Smooth scrolling animations
* Interactive hover effects

---

## 🌐 Live Demo

The application is deployed on **Vercel** and can be accessed here:

### 🚀 https://funded-master-one.vercel.app

Try the live application to explore the responsive UI, pricing sections, earnings calculator, and other platform features.

---

## 🎯 Project Objectives

The primary objectives of this project were to:

* Convert a professional Figma design into a working web application
* Build reusable React components
* Develop REST APIs using Node.js and Express
* Integrate MongoDB using Mongoose
* Implement JWT-based authentication
* Create interactive UI components
* Build a responsive user experience
* Gain experience developing and deploying a full-stack MERN application

---

## 🚀 Future Enhancements

Potential improvements include:

* Complete user dashboard
* User profile management
* Trading challenge purchase flow
* Payment gateway integration
* Admin dashboard
* Trading account management
* Advanced authentication and authorization
* Email verification
* Password reset functionality
* User transaction history
* Real-time trading statistics
* Analytics dashboard

---

## 👩‍💻 Author

**Srushti Jadhav**

GitHub: https://github.com/Srushti-Jadhav03

---

## 🔗 Project Links

**Live Application**
https://funded-master-one.vercel.app

**Source Code**
https://github.com/Srushti-Jadhav03/funded-master

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

### Funded Master

**A modern MERN-stack trading platform built from Figma to a responsive full-stack web experience.**
