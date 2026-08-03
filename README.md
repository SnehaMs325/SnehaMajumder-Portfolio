# 🌌 Cosmic Portfolio | Sneha Majumder

[![Live Demo](https://img.shields.io/badge/Live%20Demo-snehamajumder--portfolio.netlify.app-purple?style=for-the-badge&logo=netlify)](https://snehamajumder-portfolio.netlify.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Tailwind%20%7C%20Framer%20Motion-blue?style=for-the-badge)](#-tech-stack)

A high-performance, cosmic-themed personal portfolio showcasing my engineering background, interactive projects, and technical journey. Built with modern React architecture, interactive 3D interactions, and modular data management.

---

## 📌 Overview

This portfolio serves as an interactive showcase of my work and technical experience:
1. **Interactive UI/UX:** Built with modern component architecture, smooth dynamic animations, fluid responsive design, and crisp typography.
2. **Clean Engineering:** Modular data handling, performant front-end code, and dynamic interactive elements like flip-cards and status badges.

---

## 🛠️ Tech Stack & Tools

| Area | Technologies & Libraries |
| :--- | :--- |
| **Core Framework** | React.js, TypeScript |
| **Styling & UI** | Tailwind CSS, Shadcn UI, HTML5, CSS3 |
| **Animation & Icons** | Framer Motion, Lucide React Icons |
| **Deployment & Hosting** | Netlify, Git, GitHub |

---

## ✨ Key Features & Architecture

- **Centralized Data Layer:** Configured via a central `portfolioData.ts` file to keep site content completely decoupled from component rendering.
- **Interactive Experience Cards:** 3D flip-card interactions using Framer Motion to display roles, hackathons, and key milestones cleanly.
- **Project Showcase:** Custom status badges and feature integration to highlight ongoing work and completed projects.
- **Cosmic UI Design:** Custom dark space-theme palette with ambient glow effects, crisp interactive components, and responsive layouts.

---

## 📁 Repository Structure

```text
├── src/
│   ├── components/       # Reusable UI components (Hero, About, Experience, Projects)
│   ├── data/
│   │   └── portfolioData.ts  # Centralized content schema
│   ├── styles/           # Tailwind and global CSS configurations
│   └── App.tsx           # Core page assembly
├── public/               # Static assets & graphics
└── README.md
