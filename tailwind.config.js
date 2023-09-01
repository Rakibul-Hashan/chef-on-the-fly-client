import twTypography from "./node_modules/@tailwindcss/typography";
import daisyUI from "./node_modules/daisyui";
import defaultThemeTailwind from "./node_modules/tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

const defaultTheme = defaultThemeTailwind;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1140px",
      "2xl": "1140px",
    },

    extend: {
      fontFamily: {
        sans: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        beb: ["Bebas Neue", "sans-serif"], // for bebus neue font
        man: ["Manrope", "sans-serif"], // for manrope font
      },
      lineHeight: "150%",
      fontSize: {
        sm: "14px",
        base: "18px",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        lrg: "clamp(1.75rem, 1.067rem + 3.415vw, 3.5rem)",
        hlg: "clamp(1.75rem, 0.8476rem + 4.5122vw, 4.0625rem)",
        t48: "clamp(1.625rem, 1.0884rem + 2.6829vw, 3rem)",
        t32: "clamp(1.375rem, 1.1311rem + 1.2195vw, 2rem)",
        t28: "clamp(1.25rem, 1.0549rem + 0.9756vw, 1.75rem)",
        t24: "clamp(1.25rem, 1.152rem + 0.488vw, 1.5rem)",
        t20: "clamp(1.125rem, 1.076rem + 0.244vw, 1.25rem)",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      colors: {
        // Using modern `rgb`
        "primary-10": "#F3E9F9",
        
      },
    },
  },
  plugins: [twTypography, daisyUI],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#871CBB",
          pmTen: "#F3E9F9",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "5px", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": 0, // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "1", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};
