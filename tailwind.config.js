/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['Poiret One', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        '400': 400,
        '500': 600,
        '600': 600,
        '700': 700,
        '900': 900,
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.2' }],
        'h3': ['1.8rem', { lineHeight: '1.2' }],
        'h4': ['1.6rem', { lineHeight: '1.2' }],
        'h5': ['1.4rem', { lineHeight: '1.2' }],
        'h6': ['1.2rem', { lineHeight: '1.2' }],
      },
      colors: {
        darkGreen: "#85B719",
        lightGreen: "#B3E481",
        lightYellow: "#F2FFBC",
        lighYellowGreen: "#EFFFE2"
      },
      spacing: {
        '10': '0.5em',
        '15': '60px',
        '20': '80px',
        '25': '100px',
        '30': '120px',
        '40': '160px',
        '50': '200px',
        '60': '240px',
      },
      borderRadius: {
        'full': '45px',
        'medium': '35px'
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [],
}

