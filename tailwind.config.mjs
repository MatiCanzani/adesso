import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#222222',
        primary: '#4A556C',
        // primary: '#151F32',
        secondary: '#333461',
        tertiary: '#049e9e',
        quaternary: '#FAF8F6',
        // quaternary: '#f3f3f3',
        quinary: '#4A556C',
      }
    },
    fontFamily: {
      // inter: ['Inter', ...defaultTheme.fontFamily.sans],
      // noto: ['Noto Sans Lao Variable', ...defaultTheme.fontFamily.sans],
      // oxygen: ['Oxygen', ...defaultTheme.fontFamily.sans],
      kumbh: ['Kumbh Sans Variable', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('tailwindcss-motion')],
}