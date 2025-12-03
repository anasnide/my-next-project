/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        premiumBlue: "#0A1A3A",
        premiumBlue2: "#0F2557",
        premiumSapphire: "#1A3E8A"
      },
      dropShadow: {
        neon: "0 0 20px rgba(58,111,248,0.7)"
      }
    }
  },
  plugins: []
};