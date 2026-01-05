<!-- 🌊 Animated Wave Header -->
<p align="center">
  <svg width="100%" height="220" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <defs>
      <linearGradient id="waveGrad" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#020024">
          <animate attributeName="stop-color" values="#020024;#090979;#00d4ff;#020024" dur="8s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#00d4ff">
          <animate attributeName="stop-color" values="#00d4ff;#020024;#090979;#00d4ff" dur="8s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
    </defs>

    <path fill="url(#waveGrad)">
      <animate attributeName="d" dur="6s" repeatCount="indefinite"
        values="
        M0,160 C240,240 480,80 720,120 960,160 1200,240 1440,160 L1440,0 L0,0 Z;
        M0,120 C240,80 480,200 720,160 960,120 1200,80 1440,120 L1440,0 L0,0 Z;
        M0,160 C240,240 480,80 720,120 960,160 1200,240 1440,160 L1440,0 L0,0 Z
        " />
    </path>
  </svg>
</p>

<!-- 🔥 Neon Glow Animated Title -->
<div align="center">

<svg width="100%" height="120" viewBox="0 0 900 120">
  <defs>
    <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff"/>
      <stop offset="50%" stop-color="#ff00ea"/>
      <stop offset="100%" stop-color="#00f0ff"/>
    </linearGradient>

    <filter id="glow">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <text x="50%" y="65%" text-anchor="middle"
        font-size="56"
        font-weight="800"
        fill="url(#neonGrad)"
        filter="url(#glow)">
    iBuiltThis
  </text>
</svg>

### ✨ A Community Platform for Builders, Indie Hackers & Creators

<!-- 🚀 CTA BUTTONS -->
<p align="center">
  <a href="https://your-live-site.vercel.app">
    <img src="https://img.shields.io/badge/🚀_View_Live_Website-00d4ff?style=for-the-badge&logo=vercel&logoColor=black" />
  </a>
  &nbsp;&nbsp;
  <a href="https://your-admin-panel.vercel.app">
    <img src="https://img.shields.io/badge/🛠️_View_Admin_Panel-ff00ea?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0B132B?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge)

**Showcase Products · Discover Ideas · Build in Public**

</div>

---

## 🌟 Project Overview (Client-Focused)

**iBuiltThis** is a **production-ready community platform** that allows creators to showcase  
their **apps, AI tools, SaaS products, and creative projects** in one place.

The platform is designed to:
- Increase creator visibility
- Encourage building in public
- Maintain quality through admin moderation

It includes a **public product discovery website** and a **secure admin dashboard**.

---

## ⚡ Key Features

### 👤 Creator Experience
- 🔐 Secure authentication
- ➕ Submit and manage products
- 📦 Edit or remove submissions
- 🔍 Explore community-built projects
- 🧠 Creator ↔ Product association

---

### 🧑‍💼 Admin Panel
- 📋 Review product submissions
- ✅ Approve / reject listings
- ✏️ Edit product metadata
- 🗑️ Remove spam or low-quality entries
- 🛡️ Platform moderation controls

---

### 🛠️ Engineering Highlights
- ✅ Zod-based schema validation
- 🗄️ PostgreSQL + Drizzle ORM (type-safe)
- 🎨 Modern UI using Tailwind CSS
- ⚡ Fast, SEO-friendly Next.js pages
- 🔒 Production-grade architecture
- ☁️ Deployed on Vercel

---

## 🏗️ Tech Stack

| Layer | Technology |
|-----|-----------|
| Framework | Next.js |
| UI Library | React.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL |
| ORM | Drizzle ORM |
| Validation | Zod |
| Deployment | Vercel |

---

## 📸 Screenshots & Product Preview

> _Replace image paths with your actual screenshots_

<div align="center">

### 🏠 Explore Products
**Browse apps, SaaS products, and AI tools built by creators**

<img src="./public/screenshots/home.png" width="90%" alt="Explore Page" />

---

### ➕ Submit a Product
**Creators can submit and manage their projects**

<img src="./public/screenshots/submit.png" width="90%" alt="Submit Product" />

---

### 📦 Product Details
**Detailed product page with creator information**

<img src="./public/screenshots/product.png" width="90%" alt="Product Page" />

---

### 🧑‍💼 Admin Dashboard
**Moderate, approve, and manage submissions**

<img src="./public/screenshots/admin.png" width="90%" alt="Admin Panel" />

</div>

---

## 💼 Portfolio / Upwork Value

✔ Demonstrates full-stack SaaS architecture  
✔ Real-world admin & user workflows  
✔ Clean UI / UX principles  
✔ Scalable & maintainable codebase  
✔ Ideal for startups, MVPs & creator platforms  

---

<!-- 🌊 Animated Footer -->
<p align="center">
  <svg width="100%" height="160" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill="#020024">
      <animate attributeName="d" dur="6s" repeatCount="indefinite"
        values="
        M0,160 C240,120 480,200 720,180 960,160 1200,120 1440,160 L1440,320 L0,320 Z;
        M0,180 C240,200 480,120 720,140 960,160 1200,200 1440,180 L1440,320 L0,320 Z;
        M0,160 C240,120 480,200 720,180 960,160 1200,120 1440,160 L1440,320 L0,320 Z
        " />
    </path>
  </svg>

  <br/>

  <b>⭐ Star this repo if you love building in public</b>
  <b>Made with love by Rahul Gautam</b>

</p>
