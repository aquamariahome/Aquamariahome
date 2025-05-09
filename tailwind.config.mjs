/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'custom': ['AeonikTRIAL', 'sans-serif'], // Usa el nombre de la fuente definida en @font-face
			  },
		},
	},
	plugins: [],
}
