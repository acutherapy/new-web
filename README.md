# AcuTherapy Clinics Website

A modern, AI-powered, multilingual website for AcuTherapy Clinics in Honolulu, Hawaii. This project is built with **Next.js 14** and designed to provide an exceptional user experience for patients seeking holistic healing, acupuncture, and pain management.

---

## 🚀 Key Features

### 1. 🌍 **True Multilingual Support**
- **Languages**: English (EN), Japanese (JA), Chinese (ZH).
- **Implementation**: Custom `LanguageContext` ensures instant language switching without page reloads.
- **Content Localization**: Not just translation, but culturally adapted content for specific patient demographics (e.g., specific insurance info for local residents).

### 2. 📅 **Smart Booking System**
- **User Segmentation**: Automatically distinguishes between **New Patients** and **Returning Patients**.
- **New Patient Flow**: A multi-step "Smart Intake" form that collects:
  - Symptom details & Primary reason for visit.
  - Preferred clinic location (Honolulu or Aiea).
  - Contact preferences (Phone, Text, Email).
  - Automatically emails the clinic via **Resend** upon submission.
- **Returning Patient Flow**: Directs users to the **Jane App** online booking system for immediate scheduling.

### 3. 🤖 **AI Integration**
- **Symptom Checker**: An AI-powered assistant that helps users identify potential treatments based on their symptoms.
- **Context-Aware Chatbot**: Powered by **Gemini AI**, capability of answering questions in the user's selected language.

### 4. 📝 **Markdown Blog System**
- **CMS-lite**: Manage blog posts using simple Markdown (`.md`) files.
- **Multilingual Posts**: Support for language-specific versions of articles (e.g., `post-en.md`, `post-zh.md`).
- **SEO Optimized**: Automatic slug generation and metadata extraction.

### 5. 🔍 **SEO & Local Optimization (Local SEO)**
- **Geo-Targeting**: Optimization for "Honolulu", "Aiea", "Hawaii".
- **Structured Data**: JSON-LD schema for "MedicalClinic" to help Google understand opening hours, locations, and doctors.
- **Meta Tags**: Dynamic metadata generation for every page ensuring rich social sharing cards (Open Graph, Twitter).

### 6. 🎨 **Modern UI/UX**
- **Tech**: Tailwind CSS for styling, Lucide React for consistent iconography.
- **Design**: "Glassmorphism" effects, smooth transitions, and a clean, medical-grade aesthetic.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [Resend](https://resend.com/)
- **AI/LLM**: Google Gemini API
- **Deployment**: Netlify / Vercel

---

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/             # Backend API routes (chat, email sending)
│   ├── blog/            # Blog page logic
│   ├── book/            # Booking entry and form logic
│   ├── globals.css      # Global styles & Tailwind directives
│   ├── layout.tsx       # Root layout (Metadata, Fonts, Providers)
│   └── page.tsx         # Homepage component
├── components/          # Reusable UI components
│   ├── Navbar.tsx       # Reponsive navigation
│   ├── Footer.tsx       # Site footer with links
│   ├── Hero.tsx         # Main landing section
│   └── ...
├── content/
│   └── posts/           # Markdown blog post files
├── contexts/
│   └── LanguageContext  # State management for translations
└── lib/                 # Utility functions (blog parser, etc.)
```

---

## ⚡️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** installed.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd new-web
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add the following keys:

```bash
# Required for Email Functionality
RESEND_API_KEY=re_123456789

# Required for AI Chatbot
GOOGLE_GEMINI_API_KEY=AIzaSy...
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📖 Content Management Guide

### Adding a Blog Post
1.  Go to `src/content/posts`.
2.  Create a file named `your-slug-lang.md` (e.g., `back-pain-en.md`).
3.  Add the required frontmatter:

```markdown
---
title: "5 Ways Acupuncture Helps Back Pain"
date: "2024-02-14"
category: "Pain Relief"
excerpt: "Discover the natural way to heal..."
lang: "EN" # "EN", "JA", or "ZH"
---

# Your Content Here
Write in standard markdown...
```

### Updating Translations
1.  Open `src/contexts/LanguageContext.tsx`.
2.  Locate the `translations` object.
3.  Add or modify keys under `EN`, `JA`, or `ZH` objects.
4.  TypeScript will alert you if a key is missing in any language.

---

## 🚢 Deployment

The project is optimized for deployment on **Netlify** or **Vercel**.

1.  Connect your GitHub repository to Netlify/Vercel.
2.  Add the Environment Variables (`RESEND_API_KEY`, etc.) in the deployment dashboard.
3.  The build command is standard: `npm run build`.

---

2024 © AcuTherapy Clinics. All rights reserved.
