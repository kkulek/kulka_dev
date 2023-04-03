/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				paper: "url('/src/images/paper.svg')",
				noise: "url('/src/images/noise.svg')",
			},
		},
	},
	plugins: [],
};
