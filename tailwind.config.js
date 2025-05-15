/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors used in the project
      colors: {
        primary: "#6C55E1",
        secondary: "#4B39B2", // warna sekunder yang lebih gelap dari primary
        background: "#F9F8FE", // latar belakang lembut bernuansa ungu
        white: '#FBFBFB',
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(to left,rgb(53, 17, 231),rgb(149, 130, 225))',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')
  ],
}
