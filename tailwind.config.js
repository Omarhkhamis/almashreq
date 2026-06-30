/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0c101b",
          900: "#141b2d",
          800: "#1e2942",
          700: "#2a395c",
          600: "#343647"
        },
        gold: {
          DEFAULT: "#C39A5C",
          light: "#dfbe8c",
          dark: "#9d7639"
        },
        skyAureo: {
          50: "#F4FAFF",
          100: "#EBF6FF",
          200: "#D6EDFF",
          300: "#AFD8FF",
          DEFAULT: "#EBF6FF"
        },
        charcoal: "#262730",
        stoneGray: "#F3F4F6",
        warmOffWhite: "#F9FAF6",
        sandyBeige: "#EFECE6",
        burgundy: "#522521"
      },
      fontFamily: {
        madani: ["var(--font-arabic)", "Almarai", "Cairo", "sans-serif"],
        blackpast: ["var(--font-latin)", "Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        "aureo-soft": "0 15px 45px -10px rgba(12, 16, 27, 0.04)",
        "aureo-deep": "0 35px 80px -15px rgba(12, 16, 27, 0.08)",
        "gold-glow": "0 15px 35px -5px rgba(195, 154, 92, 0.2)",
        "card-glow": "0 20px 50px -12px rgba(175, 216, 255, 0.25)"
      }
    }
  },
  plugins: []
};
