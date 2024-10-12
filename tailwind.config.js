/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			spacing: {
				13: "3.25rem",
			},
			fontFamily: {
				inter: ["Inter"],
			},
		},
	},
	plugins: [],
};
