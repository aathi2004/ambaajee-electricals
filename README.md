# Sri Ambaajee Electricals — Landing Page

A modern, fully responsive landing page for **Sri Ambaajee Electricals**, Chennai's trusted electrical and plumbing materials supplier. Built with **React 18 + Vite + Tailwind CSS v3**.

---

## 🌐 Live Demo

[https://ambaajee-electricals.vercel.app](https://ambaajee-electricals.vercel.app)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.2.0 | UI Component Library |
| Vite | 5.2.0 | Build Tool & Dev Server |
| Tailwind CSS | 3.4.3 | Utility-First Styling |
| PostCSS | 8.4.38 | CSS Processor |
| Autoprefixer | 10.4.18 | CSS Vendor Prefixing |

---

## 📁 Project Structure

```
ambaajee-electricals/
├── index.html                    ← HTML entry point
├── package.json                  ← Dependencies & scripts
├── vite.config.js                ← Vite configuration
├── tailwind.config.js            ← Tailwind theme & colors
├── postcss.config.js             ← PostCSS plugins
├── README.md
└── src/
    ├── main.jsx                  ← React entry point
    ├── App.jsx                   ← Root component (all sections assembled here)
    ├── index.css                 ← Tailwind directives + global styles + marquee animation
    │
    ├── assets/
    │   └── images.js             ← All images as base64 (hero, icons, banners, brand logos)
    │
    ├── data/
    │   └── index.js              ← All page content (categories, industries, reviews, contact)
    │
    └── components/
        ├── Navbar.jsx            ← Sticky navbar with logo + CTA buttons + mobile hamburger
        ├── Hero.jsx              ← Full-width hero banner image
        ├── ProductCategories.jsx ← 8 product category cards (2-col mobile, 4-col desktop)
        ├── Brands.jsx            ← Auto right-to-left infinite marquee of 29 brand logos
        ├── IndustriesWeServe.jsx ← 3-per-page carousel with ‹ › arrows (9 industries)
        ├── WhyChooseUs.jsx       ← 3-visible scroll-by-1 carousel + brochure CTA
        ├── ClientTestimonials.jsx← 2-visible scroll-by-1 testimonials carousel
        ├── Contact.jsx           ← Contact form + address + phone details
        ├── Footer.jsx            ← Copyright + Profitcast credit
        ├── SectionHeader.jsx     ← Reusable section title with red bar + subtitle
        └── ArrowButton.jsx       ← Reusable carousel arrow button (‹ ›)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ 
- npm v9+

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/aathi2004/ambaajee-electricals.git

# 2. Go into the project folder
cd ambaajee-electricals

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `/dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Deployment on Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the `ambaajee-electricals` GitHub repository
4. Vercel auto-detects Vite — no config needed
5. Click **Deploy**

Every `git push` to `main` will auto-deploy on Vercel.

---

## ✏️ How to Update Content

All page content is centralized in **`src/data/index.js`** — no need to touch component files.

| What to change | Where |
|---|---|
| Product category names & descriptions | `src/data/index.js` → `categories` array |
| Industry cards & descriptions | `src/data/index.js` → `industries` array |
| Why Choose Us banners | `src/data/index.js` → `whyBanners` array |
| Customer reviews | `src/data/index.js` → `reviews` array |
| Address, phone numbers | `src/data/index.js` → `contactInfo` object |
| Brand logos / product images | `src/assets/images.js` |
| Brand colors (red, dark red) | `tailwind.config.js` → `colors` |
| Fonts | `index.html` → Google Fonts link + `tailwind.config.js` |
| Marquee scroll speed | `src/index.css` → `animation: marquee Xs` |

---

## 🎨 Design Tokens

```js
// tailwind.config.js
colors: {
  'brand-red':      '#D91C1C',   // Primary red
  'brand-red-dark': '#A81212',   // Hover state
}

// Font
font-family: 'Inter', sans-serif
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen | Layout |
|---|---|---|
| Default | < 640px | Mobile — single column, hamburger menu |
| `sm` | ≥ 640px | 2-column categories, desktop nav |
| `md` | ≥ 768px | Full desktop layout — 3-column carousels |

---

## 📄 Sections

1. **Navbar** — Sticky top bar with logo, "Contact Us Today" and "Get Direction" buttons
2. **Hero** — Full-width cables banner image
3. **Product Categories** — 8 categories with icon + name + description
4. **Brands** — Auto-scrolling marquee of 29 brand logos
5. **Industries We Serve** — 9 industries in a 3-per-page carousel
6. **Why Choose Us** — 5 product banners in a scroll-by-1 carousel
7. **Client Testimonials** — 5 real reviews in a 2-visible carousel
8. **Contact** — Form (Name, Phone, Email, Service) + address + phone
9. **Footer** — Copyright notice + Profitcast credit

---

## 🏢 Business Info

**Sri Ambaajee Electricals**  
75, Godown Street, Flower Bazaar, PARRY'S,  
George Town, Chennai, Tamil Nadu — 600001  

📞 +91 99626 22633 / +91 99628 19851  
☎️ 044-42166030

---

## 👨‍💻 Developed By

Marketed by [**Profitcast**](https://profitcast.in) — Efficient growth. delivered.

---

© 2025 Sri Ambaajee Electricals. All rights reserved.
