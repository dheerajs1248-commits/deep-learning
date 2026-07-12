# Deep Learning Visual Guide

An interactive, animated visual guide to deep learning concepts — from perceptrons to CNNs and RNNs.

**Live Demo**: [showcase.bockcode.in](https://showcase.bockcode.in)

## Features

- Interactive SVG Diagrams — Perceptrons, Forward Pass, Backpropagation, CNNs, RNNs
- Continuous Animations — Live simulations that loop infinitely
- Mathematical Formulations — Core formulas presented alongside visual explanations
- Responsive Design — Works on desktop, tablet, and mobile

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React
- Motion (Framer Motion)

## Getting Started

```bash
npm install
npm run dev
npm run build
```

## Deployment (cPanel)

1. Run `npm run build` to generate the `dist/` folder
2. Upload the contents of `dist/` to your cPanel subdomain folder
3. Copy `dist-htaccess` as `.htaccess` into the same folder

## Project Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── components/
│   ├── Layout.tsx
│   ├── PerceptronDiagram.tsx
│   ├── ForwardPassDiagram.tsx
│   ├── BackpropagationDiagram.tsx
│   ├── CnnDiagram.tsx
│   └── RnnDiagram.tsx
├── data/
│   └── dlContent.ts
└── hooks/
    └── useLoopingStep.ts
```

## License

MIT
