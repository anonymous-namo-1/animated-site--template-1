# Premium Business Template

A modern, animated landing page template built with Next.js 15, GSAP, and Tailwind CSS. Features premium black-glass aesthetic with smooth animations and fully customizable content.

## ✨ Features

- 🎨 **Premium Design**: Black-glass aesthetic with fog gradients and animated light lines
- 📱 **Fully Responsive**: Mobile-first design with working mobile menu
- ⚡ **GSAP Animations**: Smooth, performant animations with reduced-motion support
- 🎯 **Universal Template**: Easy to customize for any business or industry
- 🔧 **TypeScript**: Fully typed with TypeScript
- 📄 **Legal Pages**: Privacy, Terms, and Cookie policies included
- ♿ **Accessible**: Keyboard navigation, focus states, and ARIA labels

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 🎨 Customize in 60 Seconds

### 1. Edit the Content Config

Open `lib/content.ts` and update:

```typescript
export const siteConfig = {
  businessName: "YourBrand",        // Your business name
  email: "hello@yourbrand.com",     // Your contact email
  hero: {
    heading: "Transform Your",       // Main heading
    headingAccent: "Business Operations",  // Accent text
    subheading: "Your value proposition here...",
    // ... more fields
  },
  // ... customize everything
};
```

### 2. Update Colors (Optional)

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --color-primary: #3b82f6;    /* Blue */
  --color-secondary: #8b5cf6;  /* Purple */
  --color-accent: #ec4899;     /* Pink */
}
```

### 3. Replace Logo

The logo uses the first letter of `businessName`. To use a custom logo:
- Edit `components/Navigation.tsx`
- Replace the logo div with your image/SVG

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── privacy/page.tsx      # Privacy policy
│   ├── terms/page.tsx        # Terms of service
│   └── cookies/page.tsx      # Cookie policy
├── components/
│   ├── Navigation.tsx        # Header with mobile menu
│   ├── Hero.tsx              # Animated hero section
│   ├── Features.tsx          # Features grid
│   ├── HowItWorks.tsx        # Process steps
│   ├── Pricing.tsx           # Pricing tiers
│   ├── FAQ.tsx               # FAQ accordion
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer links
│   └── ScrollIndicator.tsx   # Scroll hint
└── lib/
    └── content.ts            # ⭐ ALL CONTENT HERE
```

## 🎯 Customization Points

### Change Business Info
- `lib/content.ts` → `businessName`, `email`, `domain`

### Update Hero Section
- `lib/content.ts` → `hero` object

### Modify Navigation Links
- `lib/content.ts` → `navigation` array

### Edit Features
- `lib/content.ts` → `features` array

### Update Pricing Plans
- `lib/content.ts` → `pricing` array

### Customize FAQ
- `lib/content.ts` → `faqs` array

### Change Floating Metrics
- `lib/content.ts` → `floatingMetrics` array

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: GSAP 3
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📦 Included Sections

1. **Hero** - Full-screen animated hero with CTA buttons
2. **Features** - 6-item feature grid
3. **How It Works** - 3-step process
4. **Pricing** - 3-tier pricing table
5. **FAQ** - Accordion-style FAQ
6. **Contact** - Contact form
7. **Footer** - Links and social icons

## 🎨 Design Features

- Premium black-glass glassmorphism
- Animated fog-like gradients
- Vertical light lines with traveling glows
- Subtle noise texture overlay
- Floating metric cards
- Smooth scroll animations
- Mobile-friendly navigation

## ⚡ Performance

- Static site generation (SSG)
- Optimized animations (GPU-accelerated)
- Respects `prefers-reduced-motion`
- Lazy loading where appropriate
- Minimal JavaScript bundle

## 📝 License

This is a template. Use it for any commercial or personal project.

## 🚀 Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Build and deploy
npm run build
```

## 🤝 Support

For questions or issues, open an issue on GitHub.

---

Built with ❤️ using Next.js, GSAP, and Tailwind CSS
