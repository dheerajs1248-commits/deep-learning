# 🧠 Deep Learning Visual Guide

An interactive, animated visual guide to deep learning concepts — from perceptrons to CNNs and RNNs.

🌐 **Live Demo**: [showcase.bockcode.in](https://showcase.bockcode.in)

## ✨ Features

- **Interactive SVG Diagrams** — Perceptrons, Forward Pass, Backpropagation, CNNs, RNNs
- **Continuous Animations** — Live simulations that loop infinitely
- **Mathematical Formulations** — Core formulas presented alongside visual explanations
- **Responsive Design** — Works on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** — Lightning-fast build tool
- **Tailwind CSS v4** — Utility-first styling
- **Lucide React** — Icon library
- **Motion** (Framer Motion) — Smooth animations

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment (cPanel)

1. Run `npm run build` to generate the `dist/` folder
2. Upload the contents of `dist/` to your cPanel subdomain's `public_html` or subdomain folder
3. Copy `dist-htaccess` as `.htaccess` into the same folder for SPA routing support

## 📁 Project Structure

```
src/
├── App.tsx                  # Main application with section navigation
├── main.tsx                 # React entry point
├── index.css                # Global styles & animations
├── components/
│   ├── Layout.tsx           # Sidebar + responsive shell
│   ├── PerceptronDiagram.tsx
│   ├── ForwardPassDiagram.tsx
│   ├── BackpropagationDiagram.tsx
│   ├── CnnDiagram.tsx
│   └── RnnDiagram.tsx
├── data/
│   └── dlContent.ts         # All section content & metadata
└── hooks/
    └── useLoopingStep.ts    # Animation loop hook
```

## 📄 License

MIT
