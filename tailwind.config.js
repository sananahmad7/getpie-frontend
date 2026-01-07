/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This adds the font-outfit class
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
