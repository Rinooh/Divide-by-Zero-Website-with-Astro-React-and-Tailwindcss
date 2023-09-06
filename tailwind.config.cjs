/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
		  'purple': '#8C16C5',
		  'pink': '#D733A0',
		  'white': '#F8DDEF',
		  'black': '#1E1E1E',
		  'purple-dark': '#8D1C67',
		},
		dropShadow: {
			'5xl': '0 2px 4px rgba(248,221,239,0.4)',
		},
		extend: {},
	},
	plugins: [],
}
