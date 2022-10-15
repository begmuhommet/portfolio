/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '',
				background: {
					main: '#2B2B2B'
				light: '#3C3F41',
				},
			}
		},
	},
	plugins: [],
}
