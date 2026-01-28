/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      stone: colors.stone,
      primary: colors.cyan,
      pink: colors.pink,
      // Light, feminine, professional palette
      brand: {
        black: '#1a1a1a',
        dark: '#2d2d2d',
        charcoal: '#404040',
        gray: '#6b6b6b',
        muted: '#8a8a8a',
        light: '#d4d4d4',
        cream: '#faf9f7',
        ivory: '#f5f4f0',
        white: '#ffffff',
        accent: '#7d9b76', // Sage green - sophisticated & natural
        'accent-light': '#a8c4a0',
        blush: '#e8d5d5', // Soft pink accent
        rose: '#c9a9a9', // Dusty rose
      },
      blue: {
        50: '#f0f4ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#0b1247',
        950: '#070d30',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'ABCDiatype', 'Assistant', 'sans-serif'],
      serif: ['Halant', 'serif'],
      'header-main': ['Montserrat', 'sans-serif'],
      'header-sub': ['Libre Baskerville', 'serif'],
      display: ['Montserrat', 'sans-serif'],
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
      'ultra-tight': '-0.06em',
      'hero-wide': '0.05em',
      'ultra-wide': '0.2em',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
      '7xl': ['4.5rem', '5rem'],
      '8xl': ['6rem', '6.5rem'],
      '9xl': ['8rem', '8.5rem'],
      display: ['8rem', '8rem'],
      hero: ['clamp(2.5rem, 8vw, 6rem)', '1'],
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
