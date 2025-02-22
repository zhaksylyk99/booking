/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{jsx, tsx, js}', './src/pages/**/*.{jsx, tsx, js}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Добавляем Inter как основной шрифт
			},
		},
	},
	plugins: [],
}
