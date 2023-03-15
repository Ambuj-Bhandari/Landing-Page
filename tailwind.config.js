/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      displayHead:['Alegreya SC', 'serif'],
      displayCont:['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  images: {
    domains: ["mdbcdn.b-cdn.net"]
  },
  plugins: [],
}
