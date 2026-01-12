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
      sans: ['Inter', 'sans-serif'],
      serif: ['Halant', 'serif'],
      'header-main': ['Cinzel', 'serif'],
      'header-sub': ['Libre Baskerville', 'serif'],
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
      display: ['8rem', '8rem'],
    },
  },
};
