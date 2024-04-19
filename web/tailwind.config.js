/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-primary': { DEFAULT: '#006633', 100: '#00140a', 200: '#002914', 300: '#003d1f', 400: '#005229', 500: '#006633', 600: '#00b85c', 700: '#0aff85', 800: '#5cffad', 900: '#adffd6' },
        'primary': { DEFAULT: '#800080', 100: '#1a0019', 200: '#330033', 300: '#4d004c', 400: '#660066', 500: '#800080', 600: '#cc00cc', 700: '#ff1aff', 800: '#ff66ff', 900: '#ffb3ff' },
        'light-primary': { DEFAULT: '#c8a2ff', 100: '#230054', 200: '#4600a7', 300: '#6900fb', 400: '#9950ff', 500: '#c8a2ff', 600: '#d4b6ff', 700: '#dfc8ff', 800: '#eadaff', 900: '#f4edff' },
        'accent': { DEFAULT: '#99ddff', 100: '#003652', 200: '#006da3', 300: '#00a3f5', 400: '#47c2ff', 500: '#99ddff', 600: '#ade4ff', 700: '#c2ebff', 800: '#d6f1ff', 900: '#ebf8ff' },
        'dark-gray': { DEFAULT: '#2c2c2c', 100: '#090909', 200: '#111111', 300: '#1a1a1a', 400: '#232323', 500: '#2c2c2c', 600: '#565656', 700: '#808080', 800: '#aaaaaa', 900: '#d5d5d5' },
        'off-white': { DEFAULT: '#f2efea', 100: '#3b3224', 200: '#766548', 300: '#a99673', 400: '#cdc2ae', 500: '#f2efea', 600: '#f4f2ed', 700: '#f7f5f2', 800: '#faf8f6', 900: '#fcfcfb' }
      }

    },
  },
  plugins: [],
}

