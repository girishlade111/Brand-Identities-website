# Brand Identities Website

A modern, visually stunning portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, custom cursor, and professional branding sections.

---

## Tech Stack (Dev Stack)

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.1
- **Styling:** Tailwind CSS 3.4.15
- **Animations:** Framer Motion 11.11.17
- **Icons:** Lucide React 0.460.0
- **PostCSS:** 8.4.49
- **Autoprefixer:** 10.4.20

---

## Features

- **Smooth Page Transitions** — Fluid animations using Framer Motion
- **Custom Cursor** — Interactive cursor with trailing effects
- **Responsive Design** — Fully mobile-friendly layout
- **Dark Theme** — Elegant dark mode aesthetic with custom color palette
- **Scroll Animations** — Elements animate on scroll into view
- **Hero Section** — Eye-catching landing section with floating animations
- **Services Section** — Detailed service offerings with icons
- **Portfolio Grid** — Showcase of projects/work with hover effects
- **Process Section** — Step-by-step workflow visualization
- **Client Reviews** — Testimonials and social proof
- **FAQ Section** — Accordion-style frequently asked questions
- **Footer CTA** — Call-to-action with contact information

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Configuration

### Vite Config (`vite.config.js`)
- **Dev Server Port:** 3000
- **Auto Open Browser:** true
- **Plugin:** @vitejs/plugin-react

### Tailwind Config (`tailwind.config.js`)

**Custom Colors:**
| Color | Values |
|------|--------|
| dark-50 | #f5f5f5 |
| dark-100 | #e5e5e5 |
| dark-200 | #d4d4d4 |
| dark-300 | #a3a3a3 |
| dark-400 | #737373 |
| dark-500 | #525252 |
| dark-600 | #404040 |
| dark-700 | #262626 |
| dark-800 | #171717 |
| dark-900 | #0a0a0a |
| dark-950 | #000000 |

**Custom Fonts:**
- **Sans:** Inter, system-ui
- **Display:** Inter Tight, Inter, system-ui

**Custom Border Radius:**
- **xl:** 16px
- **2xl:** 20px
- **3xl:** 24px

**Animations:**
| Animation | Duration | Easing |
|-----------|---------|--------|
| float | 6s | ease-in-out |
| float-delayed | 6s (3s delay) | ease-in-out |
| pulse-slow | 4s | cubic-bezier(0.4, 0, 0.6, 1) |
| morph | 8s | ease-in-out |
| smoke | 20s | ease-in-out |
| scroll | 30s | linear |

---

## Project Structure

```
portfolio1/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ClientReviews.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FooterCTA.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PortfolioGrid.jsx
│   │   ├── ProcessSection.jsx
│   │   └── ServicesSection.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## Stats

- **Version:** 1.0.0
- **React Version:** 18.3.1
- **Vite Version:** 6.0.1
- **Tailwind Version:** 3.4.15
- **Build Output:** ES Modules

---

## License

MIT License

---

## Author

**Girish Lade**
- GitHub: [@girishlade111](https://github.com/girishlade111)