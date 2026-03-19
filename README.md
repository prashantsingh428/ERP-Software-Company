# MargERP SaaS Landing Page

A high-performance, professional ERP landing page featuring advanced GSAP animations, interactive 3D effects, and a detailed dashboard demo.

## Features
- **Advanced GSAP UI**: Implements high-end interaction patterns (Spotlight cards, Magnetic buttons, Decrypted text).
- **Interactive Dashboard**: A comprehensive ERP dashboard mockup with 3D perspective tilt and live metrics.
- **Modern Tech Stack**: React (Vite), GSAP, Lucide Icons, and Tailwind CSS.
- **Production Ready**: Optimized assets and clean build process.

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
The build artifacts will be located in the `dist/` directory.

## Deployment
This project is a static site (SPA) and can be deployed to any major hosting provider:
- **Vercel/Netlify**: Just connect your repository; the build settings are automatically detected.
- **GitHub Pages**: Use the `gh-pages` branch or the build action.
- **Manual**: Upload the contents of the `dist/` folder to your server.

## Troubleshooting
If you encounter any icon-related issues, ensure `lucide-react` is correctly imported. All animations are powered by `gsap` which is included as a dependency.
