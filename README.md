# Ariel Orbe — Senior Software Engineer Portfolio

A production-style personal portfolio built with **Next.js 16**, **React 19**, and **TypeScript**. It presents professional experience, shipped work samples, and contact details in a fast, accessible single-page layout aimed at US software engineering recruiters.

**Live demo:** _Add your production URL when you host the site_

---

## Highlights

- **App Router** single-page architecture with server components and selective client islands
- **Content-driven** sections powered by typed data in `src/data/portfolio.ts`
- **Work samples** with optimized `next/image` handling for screenshots and illustrations
- **Motion design** with scroll-triggered fade-ins, hover glow, and card scaling (respects `prefers-reduced-motion`)
- **Responsive** navigation with mobile menu and fluid typography
- **SEO-ready** metadata, semantic HTML, and smooth in-page navigation

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Fonts | Geist via `next/font` |
| Tooling | ESLint, PostCSS |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Page composition
│   └── globals.css     # Design tokens, components, motion
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectCard.tsx
│   ├── SkillsSection.tsx
│   ├── EducationSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── FadeIn.tsx      # Intersection Observer scroll animations
└── data/
    └── portfolio.ts    # Profile, skills, experience, work samples

public/
├── companies/          # Employer logos
└── work/               # Project screenshots
```

---

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+

### Install and run

```bash
git clone https://github.com/superfortune-passion/ariel-portfolio.git
cd ariel-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

---

## Customization

1. Edit **`src/data/portfolio.ts`** for profile text, roles, highlights, and work samples.
2. Replace assets under **`public/companies/`** and **`public/work/`**.
3. Adjust theme tokens in **`src/app/globals.css`** (`--accent`, `--bg`, etc.).
4. Update **`src/app/layout.tsx`** metadata for SEO and social previews.

---

## Production build

```bash
npm run build
npm run preview   # serves static output in ./out
```

Static export (`output: "export"`) — no Node server required in production.

## Deploy to Cloudflare Pages

| Setting | Value |
|---------|--------|
| **Framework preset** | None (or Next.js Static) |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Node.js version** | `20` |
| **Root directory** | `/` (repository root) |

**Environment variables (optional):**

| Variable | Value |
|----------|--------|
| `NODE_VERSION` | `20` |

Connect your GitHub repo in the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, then use the settings above.

---

## License

Private portfolio project. All rights reserved unless otherwise noted.

---

## Author

**Ariel Orbe** — Senior Software Engineer (AI & Full Stack)  
[LinkedIn](https://www.linkedin.com/in/ariel-marnel-orbe-14a09430a/) · [Email](mailto:arielmarnel0402@gmail.com)
