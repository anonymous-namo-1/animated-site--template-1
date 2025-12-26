// ================================================
// TEMPLATE CONTENT CONFIGURATION
// ================================================
// SINGLE SOURCE OF TRUTH - Edit this file to customize the entire website
// This is a GLOBAL PREMIUM TEMPLATE - Replace all placeholder content with your brand

export const content = {
  // ============================================
  // BRAND & BUSINESS INFO
  // ⚠️ CUSTOMIZE: Replace with your brand information
  // ============================================
  brand: {
    name: "Your Brand Name",
    tagline: "Your Brand Tagline",
    logoText: "YB", // Single letter or initials for logo badge
    domain: "yourdomain.com",
    email: "hello@yourdomain.com",
    phone: "+1 (555) 000-0000",
    address: {
      street: "123 Your Street",
      city: "Your City",
      state: "ST",
      zip: "00000",
      country: "Your Country",
    },
    social: {
      twitter: "https://twitter.com/yourbrand",
      linkedin: "https://linkedin.com/company/yourbrand",
      github: "https://github.com/yourbrand",
    },
  },

  // ============================================
  // SEO & METADATA
  // ⚠️ CUSTOMIZE: Update for better search engine visibility
  // ============================================
  seo: {
    home: {
      title: "Your Brand Name - Your Brand Tagline",
      description:
        "Your compelling description here. Describe what makes your business unique in 150-160 characters.",
    },
    pricing: {
      title: "Pricing - Your Brand Name",
      description: "Transparent pricing for your product or service. Choose a plan that fits your needs.",
    },
    contact: {
      title: "Contact Us - Your Brand Name",
      description: "Get in touch with our team. We're here to help you succeed.",
    },
  },

  // ============================================
  // NAVIGATION
  // ⚠️ CUSTOMIZE: Add/remove navigation items as needed
  // type: "section" = scroll to section, "route" = navigate to page
  // ============================================
  navigation: [
    { label: "Features", type: "section" as const, href: "#features" },
    { label: "How It Works", type: "section" as const, href: "#how-it-works" },
    { label: "Pricing", type: "route" as const, href: "/pricing" },
    { label: "FAQ", type: "section" as const, href: "#faq" },
    { label: "Contact", type: "route" as const, href: "/contact" },
  ],

  // ============================================
  // HERO SECTION
  // ⚠️ CUSTOMIZE: Your main headline and call-to-action
  // ============================================
  hero: {
    badge: {
      icon: "✨",
      text: "New Feature Launch", // Optional announcement badge
      link: "#",
    },
    heading: "Build Faster.", // Main headline (first part)
    headingAccent: "Launch Smarter.", // Main headline (accent part - gets gradient)
    subheading:
      "A modern, animated website template designed to adapt to any business. Fully customizable, responsive, and ready to deploy.",
    cta: {
      primary: { text: "Get Started", href: "/contact" },
      secondary: { text: "View Features", href: "#features" },
    },
    videoDemo: {
      enabled: true,
      label: "Watch demo",
    },
  },

  // ============================================
  // FLOATING METRICS (Hero Background Cards)
  // ⚠️ CUSTOMIZE: Replace with your key metrics or disable by removing items
  // Use generic labels or your actual business metrics
  // ============================================
  metrics: {
    floating: [
      { label: "Key Metric", value: "XX+", position: "left-[10%] top-[15%]", delay: 0.8 },
      { label: "Feature Highlight", value: "XX%", position: "left-[5%] bottom-[30%]", delay: 1.2 },
      { label: "Growth Indicator", value: "XXk", position: "right-[8%] top-[12%]", delay: 1.0 },
      { label: "Performance", value: "XX+", position: "right-[15%] top-[55%]", delay: 1.4 },
      { label: "Reliability", value: "XX%", position: "right-[8%] bottom-[25%]", delay: 1.6 },
    ],
    stats: [
      { label: "Your Metric", value: "XX%", suffix: "" },
      { label: "Another Stat", value: "XXx", suffix: "" },
      { label: "Performance", value: "XX%", suffix: "" },
      { label: "Time Saved", value: "XXhr", suffix: "/week" },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ⚠️ CUSTOMIZE: Describe your product/service capabilities
  // Keep 4-6 features for optimal layout
  // ============================================
  features: {
    heading: "Everything you need to succeed",
    subheading: "Powerful features designed to help you work smarter, not harder.",
    items: [
      {
        icon: "⚡",
        title: "Fast Performance",
        description: "Built for speed with optimized code and modern architecture.",
      },
      {
        icon: "🔒",
        title: "Secure by Design",
        description: "Enterprise-grade security features to protect your data.",
      },
      {
        icon: "🎨",
        title: "Fully Customizable",
        description: "Adapt every element to match your brand and workflow.",
      },
      {
        icon: "📱",
        title: "Responsive by Default",
        description: "Perfect experience across all devices and screen sizes.",
      },
      {
        icon: "⚙️",
        title: "Modern Animations",
        description: "Smooth, professional animations powered by GSAP.",
      },
      {
        icon: "📊",
        title: "Scalable Layouts",
        description: "Grows with your business from startup to enterprise.",
      },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ⚠️ CUSTOMIZE: Your process or getting started steps
  // ============================================
  howItWorks: {
    heading: "Get started in minutes",
    subheading: "Three simple steps to transform your online presence.",
    steps: [
      {
        number: "1",
        title: "Customize Content",
        description: "Update the content.ts file with your brand information and copy.",
      },
      {
        number: "2",
        title: "Adjust Branding",
        description: "Modify colors, fonts, and styles in theme.ts to match your brand.",
      },
      {
        number: "3",
        title: "Launch Your Site",
        description: "Deploy to Vercel, Netlify, or your preferred hosting platform.",
      },
    ],
  },

  // ============================================
  // SOLUTIONS (Use Cases)
  // ⚠️ CUSTOMIZE: Who can use your product/service
  // ============================================
  solutions: {
    heading: "Built for any business",
    subheading: "A flexible template that adapts to your industry and use case.",
    items: [
      {
        icon: "💼",
        title: "For Businesses",
        description: "Perfect for showcasing your products, services, and company values.",
        features: [
          "Professional design",
          "Easy to customize",
          "Mobile responsive",
          "SEO optimized",
        ],
        cta: { text: "Learn More", href: "/contact" },
      },
      {
        icon: "🚀",
        title: "For Startups",
        description: "Launch your MVP quickly with a modern, conversion-focused design.",
        features: [
          "Fast deployment",
          "Scalable architecture",
          "Growth-ready features",
          "Analytics integration",
        ],
        cta: { text: "Get Started", href: "/contact" },
      },
      {
        icon: "🎯",
        title: "For Agencies",
        description: "Deliver client projects faster with a proven, customizable foundation.",
        features: [
          "White-label ready",
          "Component library",
          "Documentation included",
          "Support available",
        ],
        cta: { text: "View Demo", href: "#features" },
      },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ⚠️ CUSTOMIZE: Add real customer testimonials or remove section
  // ============================================
  testimonials: {
    heading: "Trusted by businesses worldwide",
    subheading: "See what our customers have to say.",
    items: [
      {
        quote:
          "This template saved us weeks of development time. The animations are smooth and the code is clean.",
        author: "Customer Name",
        role: "Job Title",
        company: "Company Name",
        image: "/placeholder-avatar.jpg",
      },
      {
        quote:
          "Beautiful design out of the box. We customized it to match our brand in just a few hours.",
        author: "Another Customer",
        role: "Position",
        company: "Business Name",
        image: "/placeholder-avatar.jpg",
      },
      {
        quote:
          "The best premium template we've used. Professional, modern, and incredibly easy to work with.",
        author: "Third Customer",
        role: "Title",
        company: "Organization",
        image: "/placeholder-avatar.jpg",
      },
    ],
  },

  // ============================================
  // PRICING
  // ⚠️ CUSTOMIZE: Your pricing tiers
  // NOTE: This template uses placeholder pricing - update with real plans
  // ============================================
  pricing: {
    heading: "Choose a plan that fits your needs",
    subheading: "Transparent pricing for businesses of all sizes. No hidden fees.",
    toggle: {
      monthly: "Monthly",
      annual: "Annual",
      annualSavings: "Save 20%",
    },
    tiers: [
      {
        name: "Starter",
        description: "Perfect for small businesses and solo entrepreneurs.",
        price: { monthly: null, annual: null },
        priceLabel: "Contact Sales", // Use priceLabel for custom pricing
        highlight: false,
        cta: { text: "Get Started", href: "/contact" },
        features: [
          "Your feature here",
          "Another feature",
          "Third feature",
          "Fourth feature",
          "Fifth feature",
        ],
      },
      {
        name: "Professional",
        description: "For growing businesses that need more power.",
        price: { monthly: null, annual: null },
        priceLabel: "Contact Sales",
        highlight: true, // Highlighted tier
        cta: { text: "Contact Sales", href: "/contact" },
        features: [
          "Everything in Starter",
          "Additional feature",
          "Premium feature",
          "Advanced feature",
          "Priority support",
          "Custom integration",
        ],
      },
      {
        name: "Enterprise",
        description: "Custom solutions for large organizations.",
        price: { monthly: null, annual: null },
        priceLabel: "Custom",
        highlight: false,
        cta: { text: "Contact Sales", href: "/contact" },
        features: [
          "Everything in Professional",
          "Unlimited access",
          "Dedicated support",
          "Custom development",
          "SLA guarantee",
          "White-label options",
        ],
      },
    ],
  },

  // ============================================
  // FAQ
  // ⚠️ CUSTOMIZE: Answer common customer questions
  // ============================================
  faq: {
    heading: "Frequently asked questions",
    subheading: "Got questions? We've got answers.",
    items: [
      {
        q: "Is this template customizable?",
        a: "Yes! This template is fully customizable. You can modify all content, colors, fonts, and layouts through the configuration files. No deep technical knowledge required.",
      },
      {
        q: "Do I need coding knowledge to use this?",
        a: "Basic knowledge is helpful but not required. Most customization is done through simple configuration files. We provide detailed documentation to guide you through the process.",
      },
      {
        q: "Can I use this for any type of business?",
        a: "Absolutely! This is a universal template designed to work for any industry - SaaS, e-commerce, agencies, consultants, local businesses, and more.",
      },
      {
        q: "Is it mobile responsive?",
        a: "Yes, the template is fully responsive and optimized for all devices - desktop, tablet, and mobile. It automatically adapts to different screen sizes.",
      },
      {
        q: "What tools and frameworks does it use?",
        a: "Built with Next.js 15, React, TypeScript, Tailwind CSS, and GSAP for animations. Modern, performant, and production-ready.",
      },
      {
        q: "Do you provide support?",
        a: "Yes, we provide documentation and support to help you get started. Contact us if you need assistance with customization or deployment.",
      },
    ],
  },

  // ============================================
  // CONTACT PAGE
  // ⚠️ CUSTOMIZE: Contact form configuration
  // ============================================
  contact: {
    heading: "Get in touch",
    subheading: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Tell us how we can help...",
      submitButton: "Send Message",
      successMessage: "Thank you! We'll be in touch soon.",
    },
    methods: [
      {
        icon: "📧",
        label: "Email",
        value: "hello@yourdomain.com",
        href: "mailto:hello@yourdomain.com",
      },
      {
        icon: "📞",
        label: "Phone",
        value: "+1 (555) 000-0000",
        href: "tel:+15550000000",
      },
      {
        icon: "📍",
        label: "Office",
        value: "123 Your Street, Your City, ST 00000",
        href: "#",
      },
    ],
  },

  // ============================================
  // FOOTER
  // ⚠️ CUSTOMIZE: Footer links and information
  // ============================================
  footer: {
    description:
      "A modern, animated website template designed for businesses of all sizes. Built with Next.js and GSAP.",
    columns: {
      Product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Demo", href: "#" },
        { label: "Documentation", href: "#" },
      ],
      Company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "/contact" },
      ],
      Resources: [
        { label: "Help Center", href: "#" },
        { label: "Support", href: "/contact" },
        { label: "Community", href: "#" },
        { label: "Status", href: "#" },
      ],
      Legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Refund Policy", href: "/refund" },
      ],
    },
  },
};
