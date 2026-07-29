<div align="center">

# 🏔️ Kalpa Tourism

### A premium digital experience for Kalpa — a Himalayan village frozen in time, alive with myth.


</div>

---

## ✨ What is this?

Kalpa Tourism is a world-class, editorial-style website for **Kalpa** — a 2,960m Himalayan village in the Kinnaur district of Himachal Pradesh, India. It combines immersive visuals, GSAP-powered animations, and an AI chat assistant to help travelers plan the perfect trip.

---

## 🎯 Features

### 🎬 Immersive Homepage
- **Full-viewport video hero** with GSAP entrance timeline animation
- **Live weather widget** — real-time temperature from Open-Meteo API
- **Infinite marquee** — GSAP-powered scrolling ticker
- **Editorial intro section** — serif typography, stats, floating accent box

### 🗺️ 8 Curated Pages
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Full landing experience with hero, weather, experiences, festivals, stays |
| `/experiences` | Experiences | Chakka Meadows, Roghi Cliff, Village Walk, Narayan Temple |
| `/events` | Events | Sazo & Phagul, Raulane Festival, National Tribal Festival |
| `/stays` | Stays | 6 accommodations — hotels, retreats, homestays, hostels |
| `/reviews` | Reviews | Traveler testimonials |
| `/faq` | FAQ | Frequently asked questions |
| `/planning` | Planning | Weather, routes, permits, packing, transport search |
| `/contact` | Contact | Inquiry form with anti-spam protection |

### 🤖 AI Chat Assistant — "KalpaGuide"
- Floating chat widget on every page
- **GPT-4o streaming** — responses appear word-by-word
- Knows everything: treks, festivals, stays, itineraries, costs, transport, weather, culture
- Recommends Booking.com / Airbnb / Zostel for stays (no payment processing)
- Suggestion chips for quick questions

### 🎨 Design System
- **Light theme** — clean, editorial aesthetic
- **Typography:** Outfit (sans-serif) + Playfair Display (serif)
- **Colors:** Warm gold `#B8801F` accent + vibrant blue `#2563EB`
- **GSAP animations** — scroll-triggered reveals, hero timeline, marquee
- **Lenis smooth scrolling** — buttery 60fps scroll experience
- **Responsive** — mobile-first with fullscreen chat on small screens

### 🔍 SEO & Analytics
- JSON-LD structured data (`TravelAgency` schema)
- Open Graph + Twitter Card meta tags
- `robots.txt` + `sitemap.xml`
- Custom event tracking via `window.dataLayer`
- Runtime error monitoring

---

## 🏗️ Architecture

```
kalpa-react/
├── api/
│   └── chat.js                  # Vercel serverless — OpenAI GPT-4o proxy
├── public/
│   ├── asset/                   # Hero video, images
│   ├── data/                    # JSON content (experiences, events, stays, site)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Layout.jsx           # Global shell (Navbar + Footer + Lenis + GSAP + ChatWidget)
│   │   ├── Hero.jsx             # Video hero with GSAP timeline
│   │   ├── ChatWidget.jsx       # AI chat bubble + panel
│   │   ├── Navbar.jsx           # Fixed nav with glassmorphism
│   │   ├── Footer.jsx           # 4-column editorial footer
│   │   ├── QuickInfoBar.jsx     # Live weather widget
│   │   ├── Marquee.jsx          # GSAP infinite scroll ticker
│   │   ├── ScrollReveal.jsx     # GSAP ScrollTrigger wrapper
│   │   ├── Experiences.jsx      # Experiences gallery
│   │   ├── Events.jsx           # Cultural calendar
│   │   ├── Accommodations.jsx   # Stays explorer
│   │   ├── Testimonials.jsx     # Traveler stories
│   │   ├── Planning.jsx         # Travel logistics + transport search
│   │   ├── ContactSection.jsx   # Inquiry form with anti-spam
│   │   └── ...                  # Cards, Modal, Accordion, etc.
│   ├── pages/                   # 8 route pages
│   ├── hooks/
│   │   └── useContentData.js    # Custom JSON fetch hook
│   ├── utils/
│   │   └── analytics.js         # Event tracking + error monitoring
│   ├── App.jsx                  # React Router setup
│   ├── main.jsx                 # Entry point
│   └── index.css                # All styles (2,200+ lines)
├── package.json
├── vite.config.js
├── eslint.config.js
└── .env.local                   # OPENAI_API_KEY (gitignored)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenAI API key (for the chatbot)

### Installation

```bash
# Clone the repo
git clone https://github.com/Harmann60/Kalpa.git
cd Kalpa

# Install dependencies
npm install

# Add your OpenAI API key
echo "OPENAI_API_KEY=sk-your-key-here" > .env.local
```

### Development

```bash
# Standard dev server (no AI chatbot)
npm run dev

# With AI chatbot (Vercel serverless functions)
npx vercel dev
```

### Build & Preview

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variable: `OPENAI_API_KEY` = your OpenAI key
4. Deploy — Vercel auto-detects Vite

```bash
# Or deploy via CLI
npx vercel --prod
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Routing** | React Router 7 |
| **Animations** | GSAP 3 + ScrollTrigger |
| **Smooth Scroll** | Lenis |
| **AI** | OpenAI GPT-4o (streaming) |
| **Weather** | Open-Meteo API |
| **Hosting** | Vercel |
| **Fonts** | Outfit + Playfair Display (Google Fonts) |
| **Styling** | Custom CSS (single file, CSS variables) |

---

## 📄 License

This project is private and proprietary.

---

<div align="center">

**Built with ❤️ for the mountains of Kinnaur**

[www.kalpa-tourism.vercel.app](https://kalpa-tourism.vercel.app)

</div>
