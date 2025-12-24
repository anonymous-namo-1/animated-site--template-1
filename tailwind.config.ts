import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // True black background, not gray
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
      },
      // CSS variables for gradients
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-accent": "var(--gradient-accent)",
      },
      // CSS variables for custom easing
      transitionTimingFunction: {
        "custom-ease": "var(--easing-custom)",
        "smooth": "var(--easing-smooth)",
        "sharp": "var(--easing-sharp)",
      },
      maxWidth: {
        "container": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
