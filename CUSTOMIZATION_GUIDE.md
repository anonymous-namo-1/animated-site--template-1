# Quick Customization Guide

## 🎯 Change Everything in 3 Minutes

### Step 1: Open `lib/content.ts`

This ONE file controls the entire website. Everything you see comes from here.

### Step 2: Edit Your Business Info

```typescript
export const siteConfig = {
  businessName: "YourCompany",              // ⬅️ Your company name
  tagline: "Your tagline here",
  email: "contact@yourcompany.com",         // ⬅️ Your email
  // ...
```

### Step 3: Customize Hero Section

```typescript
hero: {
  badge: "✨ Your announcement",           // ⬅️ Top badge text
  heading: "Your Main",                     // ⬅️ First part of headline
  headingAccent: "Message Here",            // ⬅️ Gradient text (second part)
  subheading: "Your value proposition...",  // ⬅️ Description
  primaryCTA: {
    text: "Get Started",                    // ⬅️ Main button text
    href: "#contact",                       // ⬅️ Where button links
  },
  secondaryCTA: {
    text: "Learn More",
    href: "#features",
  },
},
```

### Step 4: Update Floating Metrics

```typescript
floatingMetrics: [
  {
    label: "Your Metric",      // ⬅️ What it measures
    value: "1000+",            // ⬅️ The number
    position: "left-[8%] top-[22%]",  // Position (don't change unless needed)
    delay: 0.8                 // Animation delay
  },
  // ... add more metrics
],
```

### Step 5: Change Features

```typescript
features: [
  {
    icon: "⚡",                  // ⬅️ Emoji icon
    title: "Feature Name",      // ⬅️ Feature title
    description: "What it does" // ⬅️ Description
  },
  // ... 6 features recommended
],
```

### Step 6: Update Pricing

```typescript
pricing: [
  {
    name: "Plan Name",          // ⬅️ e.g., "Starter"
    price: "29",                // ⬅️ Price number
    period: "month",            // ⬅️ "month" or "year"
    description: "Who it's for",
    features: [                 // ⬅️ List of features
      "Feature 1",
      "Feature 2",
    ],
    cta: "Button Text",
    featured: false             // ⬅️ Set true to highlight
  },
],
```

## 🎨 Change Colors

Open `app/globals.css`:

```css
:root {
  --color-primary: #3b82f6;    /* ⬅️ Main brand color */
  --color-secondary: #8b5cf6;  /* ⬅️ Secondary color */
  --color-accent: #ec4899;     /* ⬅️ Accent color */
}
```

## 📝 Edit Legal Pages

1. `/app/privacy/page.tsx` - Privacy Policy
2. `/app/terms/page.tsx` - Terms of Service
3. `/app/cookies/page.tsx` - Cookie Policy

Just edit the text in the `<article>` tag. All use `{siteConfig.businessName}` and `{siteConfig.email}` automatically.

## 🔗 Update Navigation

In `lib/content.ts`:

```typescript
navigation: [
  { label: "Link Text", href: "#section-id" },  // ⬅️ Hash for scroll
  { label: "Other Page", href: "/page" },       // ⬅️ Path for route
],
```

## 📬 Update Footer

In `lib/content.ts`:

```typescript
footer: {
  description: "Your company description",
  social: [
    { name: "Twitter", href: "https://twitter.com/yourhandle", icon: "twitter" },
    // ... more social links
  ],
  links: {
    Product: [
      { label: "Link Name", href: "/path" },
    ],
    // ... more link groups
  },
},
```

## 🖼️ Replace Logo

Default logo uses first letter of `businessName`.

### To use custom logo:

1. Open `components/Navigation.tsx`
2. Find the logo div (around line 83)
3. Replace with:

```tsx
<img src="/logo.svg" alt={siteConfig.businessName} className="h-8" />
```

4. Add your logo to `/public/logo.svg`

## ✅ Checklist

- [ ] Changed `businessName` in `lib/content.ts`
- [ ] Updated `email` in `lib/content.ts`
- [ ] Customized hero heading and subheading
- [ ] Updated floating metrics
- [ ] Changed features (6 items)
- [ ] Updated pricing plans (3 tiers)
- [ ] Edited FAQ questions
- [ ] Changed navigation links
- [ ] Updated footer links
- [ ] Edited legal pages (privacy, terms, cookies)
- [ ] Changed colors in `globals.css` (optional)
- [ ] Replaced logo (optional)

## 🚀 After Customization

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy
# Push to GitHub and connect to Vercel/Netlify
```

## 📁 Files You'll Edit

1. **`lib/content.ts`** ⭐ - MOST IMPORTANT (95% of changes)
2. **`app/globals.css`** - Only for color changes
3. **`app/privacy/page.tsx`** - Privacy policy text
4. **`app/terms/page.tsx`** - Terms of service text
5. **`app/cookies/page.tsx`** - Cookie policy text
6. **`components/Navigation.tsx`** - Only if custom logo

## 🎯 Pro Tips

1. **Start with `lib/content.ts`** - Change everything there first
2. **Use Find & Replace** - Search for "YourBrand" to find placeholders
3. **Test after each change** - Run `npm run dev` to see changes live
4. **Keep it simple** - Don't change component structure unless needed
5. **Backup first** - Copy `lib/content.ts` before major changes

## ❓ Common Questions

**Q: How do I add more sections?**
A: Edit `app/page.tsx` and import/add new components.

**Q: Can I change animations?**
A: Yes, but only if you know GSAP. Most animations are in `components/Hero.tsx`.

**Q: How do I add a blog?**
A: Create `app/blog/page.tsx` and add a Blog component.

**Q: Can I use a different font?**
A: Yes, add it in `app/layout.tsx` and update `globals.css`.

---

**Need help?** Open an issue on GitHub or check the main README.
