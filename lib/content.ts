// ================================================
// TEMPLATE CONTENT CONFIGURATION
// ================================================
// Edit this file to customize the entire website
// Replace placeholders with your business information

export const siteConfig = {
  // Business Information
  businessName: "YourBrand",
  tagline: "Transform Your Business",
  domain: "yourbrand.com",
  email: "hello@yourbrand.com",

  // SEO & Metadata
  seo: {
    title: "YourBrand - Premium Business Solutions",
    description: "Streamline your workflow with our innovative platform. Built for modern businesses that value efficiency and growth.",
  },

  // Hero Section
  hero: {
    badge: "✨ New Platform Launch",
    heading: "Transform Your",
    headingAccent: "Business Operations",
    subheading: "Streamline your workflow with our innovative platform. Built for modern businesses that value efficiency and growth.",
    primaryCTA: {
      text: "Get Started",
      href: "#contact",
    },
    secondaryCTA: {
      text: "Learn More",
      href: "#features",
    },
  },

  // Navigation
  navigation: [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Floating Metrics (replaces asset cards)
  floatingMetrics: [
    { label: "Active Users", value: "10K+", position: "left-[8%] top-[22%]", delay: 0.8 },
    { label: "Success Rate", value: "98.2%", position: "left-[5%] bottom-[28%]", delay: 1.2 },
    { label: "Projects", value: "5.2K", position: "right-[10%] top-[18%]", delay: 1.0 },
    { label: "Countries", value: "120+", position: "right-[12%] top-[45%]", delay: 1.4 },
    { label: "Uptime", value: "99.9%", position: "right-[8%] bottom-[15%]", delay: 1.6 },
  ],

  // Social Proof
  trustedBy: [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
  ],

  // Features
  features: [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure built for speed.",
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      description: "Enterprise-grade security protecting your data with industry-leading encryption.",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Real-time insights and comprehensive reports to make data-driven decisions.",
    },
    {
      icon: "🚀",
      title: "Easy Integration",
      description: "Seamlessly connect with your existing tools and workflows in minutes.",
    },
    {
      icon: "🎯",
      title: "Goal Tracking",
      description: "Set, monitor, and achieve your business objectives with intelligent tracking.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Get help whenever you need it from our dedicated support team.",
    },
  ],

  // How It Works
  howItWorks: [
    {
      step: "1",
      title: "Sign Up",
      description: "Create your account in less than 2 minutes. No credit card required.",
    },
    {
      step: "2",
      title: "Customize",
      description: "Tailor the platform to your needs with our intuitive setup wizard.",
    },
    {
      step: "3",
      title: "Launch",
      description: "Go live and start seeing results from day one with our proven system.",
    },
  ],

  // Dashboard Insights (replaces DeFi metrics)
  insights: {
    title: "Real-Time Business Insights",
    subtitle: "Monitor your key metrics at a glance",
    metrics: [
      { label: "Growth Rate", value: "28.5%", trend: "up" },
      { label: "Conversion", value: "12.8%", trend: "up" },
      { label: "Retention", value: "94.2%", trend: "up" },
      { label: "Response Time", value: "1.2s", trend: "down" },
    ],
  },

  // Use Cases
  useCases: [
    {
      title: "For Startups",
      description: "Scale quickly with tools designed for rapid growth and agility.",
      icon: "🌱",
    },
    {
      title: "For Enterprises",
      description: "Enterprise-grade solutions with advanced features and dedicated support.",
      icon: "🏢",
    },
    {
      title: "For Agencies",
      description: "Manage multiple clients efficiently with our agency-focused features.",
      icon: "🎨",
    },
  ],

  // Testimonials
  testimonials: [
    {
      quote: "This platform transformed how we work. Our productivity increased by 40% in the first month.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "SJ",
    },
    {
      quote: "The best investment we've made this year. The ROI was immediate and substantial.",
      author: "Michael Chen",
      role: "Founder, GrowthLab",
      avatar: "MC",
    },
    {
      quote: "Incredibly intuitive and powerful. Our entire team was up and running in days.",
      author: "Emily Rodriguez",
      role: "Operations Director, InnovateCo",
      avatar: "ER",
    },
  ],

  // Pricing
  pricing: [
    {
      name: "Starter",
      price: "29",
      period: "month",
      description: "Perfect for individuals and small teams getting started.",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Core features",
      ],
      cta: "Start Free Trial",
      featured: false,
    },
    {
      name: "Professional",
      price: "99",
      period: "month",
      description: "Ideal for growing businesses that need more power.",
      features: [
        "Up to 20 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "All features",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific requirements.",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics",
        "24/7 dedicated support",
        "Enterprise features",
        "SLA guarantee",
        "Custom development",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ],

  // FAQ
  faqs: [
    {
      question: "How long is the free trial?",
      answer: "Our free trial lasts 14 days with full access to all features. No credit card required to start.",
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption and are fully compliant with GDPR and SOC 2 standards.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
    {
      question: "Can I integrate with other tools?",
      answer: "Yes, we offer integrations with over 100+ popular tools and a robust API for custom integrations.",
    },
  ],

  // Footer
  footer: {
    description: "Transform your business operations with our innovative platform.",
    social: [
      { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
      { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { name: "GitHub", href: "https://github.com", icon: "github" },
    ],
    links: {
      Product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
      Company: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "#contact" },
      ],
      Legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  },
};
