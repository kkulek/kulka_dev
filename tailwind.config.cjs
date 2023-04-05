/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				paper: "url('/src/images/paper.svg')",
				noise: "url('/src/images/noise.svg')",
			},
			animation: {
				fade: "fadeIn 1s ease-in-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				}
			}
		},
	},
	plugins: [],
};
