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
    fontFamily: {
      'poiret': 'var(--font-poiret-one)',
      'poppins': 'var(--font-poppins)',
    },
    extend: {
      fontWeight: {
        '400': 400,
        '500': 600,
        '600': 600,
        '700': 700,
        '900': 900,
      },
      fontSize: {
        'h1': ['5rem', { lineHeight: '1.2' }],
        'h2': ['4.5rem', { lineHeight: '1.2' }],
        'h3': ['4rem', { lineHeight: '1.2' }],
        'h4': ['3.5rem', { lineHeight: '1.2' }],
        'h5': ['3rem', { lineHeight: '1.2' }],
        'h6': ['2.5rem', { lineHeight: '1.2' }],
        'h7': ['2rem', { lineHeight: '1.2' }],
        'h8': ['1.5rem', { lineHeight: '1.2' }],
        'h9': ['1.25rem', { lineHeight: '1.2' }],
      },
      colors: {
        green: "#9CD520",
        darkerGreen: "#85B719",
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
        'medium': '35px',
        'low':'25px',
        'lower':'15px'
      },
      keyframes: {
        'slide-in-fade': {
          '0%': { transform: 'translateY(-20px), translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(-15px), translateX(-15px)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-fade': 'slide-in-fade 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

