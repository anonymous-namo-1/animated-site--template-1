// ================================================
// TEMPLATE THEME CONFIGURATION
// ================================================
// Centralized design tokens for colors, gradients, spacing, etc.

export const theme = {
  // Color Palette
  colors: {
    background: {
      primary: "#050505",
      secondary: "#0a0a0a",
      tertiary: "#121212",
    },
    foreground: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.9)",
      tertiary: "rgba(255, 255, 255, 0.7)",
      muted: "rgba(255, 255, 255, 0.6)",
    },
    brand: {
      primary: "#3b82f6",
      secondary: "#8b5cf6",
      accent: "#ec4899",
    },
    border: {
      subtle: "rgba(255, 255, 255, 0.05)",
      default: "rgba(255, 255, 255, 0.08)",
      strong: "rgba(255, 255, 255, 0.12)",
    },
    glass: {
      light: "rgba(255, 255, 255, 0.03)",
      medium: "rgba(255, 255, 255, 0.06)",
      strong: "rgba(255, 255, 255, 0.08)",
    },
  },

  // Gradients
  gradients: {
    primary: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    secondary: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    accent: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
    fog: {
      cyan: "radial-gradient(circle, rgba(120, 180, 200, 0.4) 0%, transparent 70%)",
      teal: "radial-gradient(circle, rgba(100, 160, 140, 0.4) 0%, transparent 70%)",
      gray: "radial-gradient(circle, rgba(140, 150, 160, 0.3) 0%, transparent 70%)",
    },
  },

  // Spacing
  spacing: {
    section: {
      sm: "4rem",
      md: "6rem",
      lg: "8rem",
    },
    container: {
      maxWidth: "1440px",
      padding: "1.5rem",
    },
  },

  // Border Radius
  radius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    full: "9999px",
  },

  // Shadows (minimal for dark theme)
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },

  // Typography
  typography: {
    fontFamily: {
      sans: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", Monaco, Consolas, monospace',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
    },
  },

  // Animation
  animation: {
    // Duration tokens
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "800ms",
    },
    // Easing functions
    easing: {
      ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      smooth: "cubic-bezier(0.45, 0, 0.55, 1)",
    },
    // Reduced motion overrides
    reducedMotion: {
      disableFloating: true,
      disableFog: true,
      disablePulse: true,
      fadeDuration: "200ms",
    },
  },

  // Backdrop blur amounts
  blur: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
  },

  // Z-index layers
  zIndex: {
    background: -1,
    base: 0,
    content: 10,
    header: 50,
    modal: 100,
  },
} as const;

export type Theme = typeof theme;
