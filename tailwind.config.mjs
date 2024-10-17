import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// primary: '#222222',
				// primary: '#333461',
				primary: '#151F32',
				secondary: '#fcfcfc',
				tertiary: '#20AD96',
				quaternary: '#FAF8F6',
				// quaternary: '#f3f3f3',
				quinary: '#EFEFEF',
// 				quinary: 
// senary:
			}
		},
		fontFamily: {
			inter: ['Inter', ...defaultTheme.fontFamily.sans],
			noto: ['Noto Sans Lao Variable', ...defaultTheme.fontFamily.sans],
			oxygen: ['Oxygen', ...defaultTheme.fontFamily.sans],
			kumbh: ['Kumbh Sans Variable', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
}
