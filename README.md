<<<<<<< HEAD
# Sri Ambaajee Electricals — Landing Page

Built with **React 18 + Vite + Tailwind CSS v3**

## Project Structure

```
ambaajee-electricals/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Root component (assembles all sections)
    ├── index.css             ← Tailwind directives + global styles
    ├── assets/
    │   └── images.js         ← All images as base64 (no CDN needed)
    ├── data/
    │   └── index.js          ← All page content (categories, reviews, etc.)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── ProductCategories.jsx
        ├── Brands.jsx                ← Auto right-to-left marquee
        ├── IndustriesWeServe.jsx     ← 3-per-page carousel with ‹ › arrows
        ├── WhyChooseUs.jsx           ← 3-visible, scroll-by-1 carousel
        ├── ClientTestimonials.jsx    ← 2-visible, scroll-by-1 carousel
        ├── Contact.jsx               ← Contact form + address
        ├── Footer.jsx
        ├── SectionHeader.jsx         ← Reusable — section title component
        └── ArrowButton.jsx           ← Reusable — carousel arrow button
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## To Update Content

| What to change          | File to edit              |
|-------------------------|---------------------------|
| Categories text/icons   | `src/data/index.js`       |
| Industry cards          | `src/data/index.js`       |
| Why Choose Us banners   | `src/data/index.js`       |
| Customer reviews        | `src/data/index.js`       |
| Contact details         | `src/data/index.js`       |
| Images / logos          | `src/assets/images.js`    |
| Colors / fonts          | `tailwind.config.js`      |
=======
# ambaajee-electricals
>>>>>>> c6997f561cd46f67d9ca55ee52d20cfc6f93695a
