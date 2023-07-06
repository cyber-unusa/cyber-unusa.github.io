/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#13A085',
        lowprim: '#26B99A',
        secbg: '#F4F4F4',
        yel: '#FFCD00',
      },
      fontFamily: {
        rubik: "Rubik",
        poppin: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};

