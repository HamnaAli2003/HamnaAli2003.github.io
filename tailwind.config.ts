import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        brand: "var(--color-brand, oklch(65% 0.08 200))",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        'sans': ['var(--font-body, Ranade)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-heading, Archivo)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-heading, Archivo)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Hero title: 48-60px
        hero: ["3rem", { lineHeight: "1.2", fontWeight: "300" }],
        "hero-lg": ["3.75rem", { lineHeight: "1.2", fontWeight: "300" }],
        // Section headings: 30-36px
        "section-heading": ["1.875rem", { lineHeight: "1.2", fontWeight: "600" }],
        "section-heading-lg": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        // Card titles: 20-24px
        "card-title": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "card-title-lg": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        // Subsection: 18px
        subsection: ["1.125rem", { lineHeight: "1.5", fontWeight: "500" }],
        // Metadata: 14px
        metadata: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        // Custom spacing from specification
        "4xl": "6rem", // 96px - Major section separation
        "3xl": "4rem", // 64px - Section padding (desktop)
        "2xl": "3rem", // 48px - Section padding (mobile)
      },
      maxWidth: {
        "reading": "48rem", // 768px - Optimal reading width
        "content": "80rem", // 1280px - Max content width
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;