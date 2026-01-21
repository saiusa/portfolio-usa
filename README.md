# Sai's UI/UX Designer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This portfolio showcases Sai's journey as a UI/UX designer through three carefully curated projects:

1. **What You Know** - E-commerce App Redesign (demonstrates UX fundamentals)
2. **What You Learned** - Healthcare App UX Case Study (shows growth and iteration)
3. **What You Aspire to Do** - AI Study Planner UX (future-focused vision)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- A code editor (VS Code recommended)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio-usa/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Hero.tsx          # Hero section with introduction
│       ├── Projects.tsx      # Featured projects showcase
│       ├── Learning.tsx      # Currently learning section
│       └── Footer.tsx        # Footer with links
├── public/                   # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode** - Automatic dark mode based on system preferences
- **Modern UI** - Clean, professional design with smooth animations
- **Fast Performance** - Built with Next.js for optimal loading speeds
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessible** - WCAG compliant design

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

Your portfolio will be live at: `https://your-project.vercel.app`

### Environment Variables

No environment variables required for basic deployment.

## 🛠️ Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React 19** - UI library

## 📝 Customization Guide

### Update Your Information

1. **Hero Statement** - Edit [src/components/Hero.tsx](src/components/Hero.tsx)
2. **Projects** - Modify the `projectsData` array in [src/components/Projects.tsx](src/components/Projects.tsx)
3. **Learning Areas** - Update `learningAreas` in [src/components/Learning.tsx](src/components/Learning.tsx)
4. **Contact Info** - Edit links in [src/components/Footer.tsx](src/components/Footer.tsx)
5. **Metadata** - Update title and description in [src/app/layout.tsx](src/app/layout.tsx)

### Add Project Images

1. Add images to the `public/` folder (e.g., `public/projects/project1.png`)
2. Import in components: `import Image from 'next/image'`
3. Use the Image component: `<Image src="/projects/project1.png" alt="..." width={800} height={600} />`

### Customize Colors

Edit [tailwind.config.js](tailwind.config.js) to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

## 📋 Next Steps

- [ ] Add project case study pages (`/projects/[slug]`)
- [ ] Include project images and mockups
- [ ] Add contact form functionality
- [ ] Integrate analytics (Google Analytics, Plausible)
- [ ] Add blog section for design insights
- [ ] Create downloadable resume/CV
- [ ] Add testimonials section
- [ ] Implement project filtering by category

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 👤 About

Created by Sai - UI/UX Designer passionate about creating meaningful digital experiences.

---

**Ready to make this portfolio yours?** Start by customizing the content in the components folder!
