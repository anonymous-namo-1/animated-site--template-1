// ================================================
// TEMPLATE CONTENT CONFIGURATION
// ================================================
// SINGLE SOURCE OF TRUTH - Edit this file to customize entire website

export const content = {
  // ============================================
  // BRAND & BUSINESS INFO
  // ============================================
  brand: {
    name: "Velocity",
    tagline: "Ship faster, scale smarter",
    logoText: "V",
    domain: "getvelocity.io",
    email: "hello@getvelocity.io",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Innovation Drive",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States",
    },
    social: {
      twitter: "https://twitter.com/velocity",
      linkedin: "https://linkedin.com/company/velocity",
      github: "https://github.com/velocity",
    },
  },

  // ============================================
  // SEO & METADATA
  // ============================================
  seo: {
    home: {
      title: "Velocity - Ship faster, scale smarter",
      description:
        "The all-in-one platform for modern teams. Collaborate, automate, and scale your operations with tools built for speed.",
    },
    pricing: {
      title: "Pricing - Velocity",
      description: "Simple, transparent pricing for teams of all sizes. Start free, scale as you grow.",
    },
    contact: {
      title: "Contact Us - Velocity",
      description: "Get in touch with our team. We're here to help you succeed.",
    },
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: [
    { label: "Features", type: "section" as const, href: "#features" },
    { label: "Solutions", type: "route" as const, href: "/solutions" },
    { label: "Pricing", type: "route" as const, href: "/pricing" },
    { label: "Company", type: "section" as const, href: "#faq" },
    { label: "Contact", type: "route" as const, href: "/contact" },
  ],

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    badge: {
      icon: "✨",
      text: "Announcing V2.0",
      link: "#",
    },
    heading: "Ship faster,",
    headingAccent: "scale smarter",
    subheading:
      "The all-in-one platform for modern teams. Collaborate, automate, and scale your operations with tools built for speed.",
    cta: {
      primary: { text: "Start Free Trial", href: "/contact" },
      secondary: { text: "See How It Works", href: "#features" },
    },
    videoDemo: {
      enabled: true,
      label: "Watch demo",
    },
  },

  // ============================================
  // FLOATING METRICS
  // ============================================
  metrics: {
    floating: [
      { label: "Active Teams", value: "12K+", position: "left-[8%] top-[22%]", delay: 0.8 },
      { label: "Uptime", value: "99.9%", position: "left-[5%] bottom-[28%]", delay: 1.2 },
      { label: "API Calls/day", value: "5.2M", position: "right-[10%] top-[18%]", delay: 1.0 },
      { label: "Countries", value: "140+", position: "right-[12%] top-[45%]", delay: 1.4 },
      { label: "Avg Response", value: "< 2s", position: "right-[8%] bottom-[15%]", delay: 1.6 },
    ],
    stats: [
      { label: "Customer Satisfaction", value: "98%", suffix: "" },
      { label: "Faster Deployment", value: "10x", suffix: "" },
      { label: "Cost Reduction", value: "40%", suffix: "" },
      { label: "Time Saved", value: "20hrs", suffix: "/week" },
    ],
  },

  // ============================================
  // SOCIAL PROOF
  // ============================================
  socialProof: {
    heading: "Trusted by leading teams worldwide",
    logos: [
      { name: "Acme Corp", placeholder: true },
      { name: "TechFlow", placeholder: true },
      { name: "DataSync", placeholder: true },
      { name: "CloudBase", placeholder: true },
      { name: "StreamLabs", placeholder: true },
    ],
  },

  // ============================================
  // FEATURES
  // ============================================
  features: {
    heading: "Everything you need to succeed",
    subheading: "Powerful features designed to help you work smarter, not harder.",
    items: [
      {
        icon: "⚡",
        title: "Lightning Fast",
        description:
          "Optimized infrastructure delivers sub-second response times globally. Your team stays productive without waiting.",
      },
      {
        icon: "🔒",
        title: "Enterprise Security",
        description:
          "Bank-level encryption, SOC 2 compliance, and granular access controls keep your data safe.",
      },
      {
        icon: "📊",
        title: "Real-Time Analytics",
        description:
          "Live dashboards and custom reports give you instant visibility into what matters most.",
      },
      {
        icon: "🔗",
        title: "Seamless Integrations",
        description:
          "Connect with 100+ tools you already use. REST API and webhooks for custom workflows.",
      },
      {
        icon: "🎯",
        title: "Smart Automation",
        description:
          "Automate repetitive tasks with visual workflows. No code required, infinite possibilities.",
      },
      {
        icon: "💬",
        title: "24/7 Support",
        description:
          "Expert support team available around the clock. Live chat, email, and priority phone support.",
      },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    heading: "Get started in minutes",
    subheading: "Three simple steps to transform how your team works.",
    steps: [
      {
        number: "1",
        title: "Connect Your Tools",
        description:
          "Import your existing data and connect your favorite apps in one click. We handle the migration.",
      },
      {
        number: "2",
        title: "Customize Your Workspace",
        description:
          "Tailor dashboards, workflows, and permissions to match how your team operates.",
      },
      {
        number: "3",
        title: "Start Shipping",
        description:
          "Go live immediately. Our onboarding specialists ensure you're set up for success from day one.",
      },
    ],
  },

  // ============================================
  // SOLUTIONS / USE CASES
  // ============================================
  solutions: {
    heading: "Built for every team",
    subheading: "Whether you're a startup or enterprise, we scale with you.",
    items: [
      {
        icon: "🚀",
        title: "For Startups",
        description:
          "Move fast without breaking things. Launch features quickly with built-in best practices and templates.",
        features: [
          "Free tier with generous limits",
          "Rapid prototyping tools",
          "Startup-friendly pricing",
          "Expert onboarding included",
        ],
        cta: { text: "Start Building", href: "/contact" },
      },
      {
        icon: "🏢",
        title: "For Enterprises",
        description:
          "Enterprise-grade reliability, security, and support. Custom SLAs and dedicated infrastructure available.",
        features: [
          "SSO & advanced security",
          "Dedicated account manager",
          "Custom integrations",
          "99.99% SLA guarantee",
        ],
        cta: { text: "Contact Sales", href: "/contact" },
      },
      {
        icon: "🎨",
        title: "For Agencies",
        description:
          "Manage multiple clients effortlessly. White-label options and reseller programs available.",
        features: [
          "Multi-tenant architecture",
          "Client billing automation",
          "White-label branding",
          "Agency partner program",
        ],
        cta: { text: "Learn More", href: "/solutions" },
      },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    heading: "Loved by teams worldwide",
    items: [
      {
        quote:
          "Velocity cut our deployment time from days to hours. The automation features alone saved us 20 hours a week.",
        author: "Sarah Chen",
        role: "VP of Engineering",
        company: "TechFlow",
        avatar: "SC",
      },
      {
        quote:
          "Best investment we made this year. ROI was immediate and the support team is exceptional.",
        author: "Marcus Johnson",
        role: "CTO",
        company: "DataSync",
        avatar: "MJ",
      },
      {
        quote:
          "We scaled from 10 to 100 employees without changing our stack. Velocity just works.",
        author: "Emily Rodriguez",
        role: "Head of Operations",
        company: "CloudBase",
        avatar: "ER",
      },
    ],
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    heading: "Simple, transparent pricing",
    subheading: "Start free. Upgrade as you grow. No hidden fees, cancel anytime.",
    toggle: {
      monthly: "Monthly",
      annual: "Annual",
      annualSavings: "Save 20%",
    },
    tiers: [
      {
        name: "Starter",
        description: "Perfect for individuals and small teams just getting started.",
        price: { monthly: 0, annual: 0 },
        highlight: false,
        cta: { text: "Start Free", href: "/contact" },
        features: [
          "Up to 5 team members",
          "10GB storage",
          "Basic analytics",
          "Email support",
          "100 API calls/day",
          "Community access",
        ],
      },
      {
        name: "Professional",
        description: "For growing teams that need more power and flexibility.",
        price: { monthly: 49, annual: 470 },
        highlight: true,
        cta: { text: "Start 14-Day Trial", href: "/contact" },
        features: [
          "Up to 25 team members",
          "100GB storage",
          "Advanced analytics",
          "Priority email & chat",
          "Unlimited API calls",
          "Custom integrations",
          "Advanced automation",
          "SSO (SAML)",
        ],
      },
      {
        name: "Enterprise",
        description: "Custom solutions for large organizations with specific needs.",
        price: { monthly: null, annual: null },
        priceLabel: "Custom",
        highlight: false,
        cta: { text: "Contact Sales", href: "/contact" },
        features: [
          "Unlimited team members",
          "Unlimited storage",
          "Custom analytics",
          "24/7 phone support",
          "Dedicated infrastructure",
          "SLA guarantee (99.99%)",
          "Custom contracts",
          "On-premise deployment",
          "Dedicated account manager",
        ],
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    heading: "Frequently asked questions",
    subheading: "Everything you need to know about our platform.",
    items: [
      {
        q: "How long is the free trial?",
        a: "All paid plans include a 14-day free trial with full access to all features. No credit card required to start.",
      },
      {
        q: "Can I change plans later?",
        a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and ACH transfers for annual plans. Invoicing available for Enterprise customers.",
      },
      {
        q: "Is my data secure?",
        a: "Absolutely. We use bank-level AES-256 encryption, are SOC 2 Type II certified, and are fully GDPR compliant. Your data is encrypted at rest and in transit.",
      },
      {
        q: "What's your refund policy?",
        a: "We offer a 30-day money-back guarantee for all annual plans. If you're not satisfied, contact support for a full refund—no questions asked.",
      },
      {
        q: "Do you offer discounts for nonprofits or education?",
        a: "Yes! We offer 50% off our Professional plan for qualifying nonprofits and educational institutions. Contact sales@getvelocity.io to apply.",
      },
      {
        q: "Can I integrate with my existing tools?",
        a: "We offer 100+ pre-built integrations including Slack, GitHub, Salesforce, and more. Plus, our REST API and webhooks let you build custom integrations.",
      },
      {
        q: "What kind of support do you offer?",
        a: "Starter: Email support (24hr response). Professional: Priority email & live chat. Enterprise: 24/7 phone support + dedicated account manager.",
      },
    ],
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    heading: "Let's talk",
    subheading: "Our team is here to help you succeed. Get in touch and we'll respond within 24 hours.",
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Tell us about your project...",
      submitText: "Send Message",
      successMessage: "Thanks! We'll be in touch within 24 hours.",
      errorMessage: "Oops! Something went wrong. Please try again or email us directly.",
    },
    methods: [
      {
        icon: "📧",
        label: "Email",
        value: "hello@getvelocity.io",
        href: "mailto:hello@getvelocity.io",
      },
      {
        icon: "💬",
        label: "Live Chat",
        value: "Available 24/7",
        href: "#",
      },
      {
        icon: "📞",
        label: "Phone",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567",
      },
    ],
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    description: "The all-in-one platform for modern teams. Ship faster, scale smarter.",
    columns: {
      Product: [
        { label: "Features", href: "#features" },
        { label: "Solutions", href: "/solutions" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/solutions#integrations" },
      ],
      Company: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
      Resources: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Support", href: "/contact" },
        { label: "Status", href: "https://status.getvelocity.io" },
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

export type Content = typeof content;
