

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'mono' : ['Noto Sans Mono','ui-monospace']
    },
    colors : {
      heading : '#ff00d4',
      heading2 : '#FA2FB5',
      subHeading: '#BC6FF1',
    }
  },
  plugins: [],
}