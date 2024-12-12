import type { Config } from "tailwindcss";

// utility constants 
const remMulti = 0.0625  // (1PT * 0.0625 -> REM) && reduced font size to match the figma scale
const remMultiScaled = (0.0625 / 1.312)

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {

			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				// COLOURS
				primary0: '#000000',
				primary: '#006633',
				primary1B: '#228B22',
				secondary: '#800080',
				secondaryRegal: '#4A0E4E',
				accent2: '#C8A2FF',
				accent1: '#99DDFF',
				accent1B: '#00CED1',
				accent3: '#D4AF37',
				accent4: '#FF9966',
				accent4B: '#FF6F61',
				offWhite: '#D9D9D9',
				offWhite1B: '#F9F7F5',
				white: '#FFFFFF',
				gray2: '#36454F',
				gray1: '#2C2C2C',
				gray3: '#1E1E1E',

			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
				mono: ['"JetBrains Mono"', 'mono'],
				// Typography Styles
				display: ['Merriweather', 'serif'],
				headlines: ['"Plus Jakarta Sans"', 'sans-serif'],
				title: ['"Plus Jakarta Sans"', 'sans-serif'],
				label: ['Merriweather', 'serif'],
				body: ['Merriweather', 'serif'],
				technical: ['"JetBrains Mono"', 'mono'],
			},
			fontSize: {
				// DISPLAY STYLES (1PT * 0.0625 -> REM)
				'display-large': [(57 * remMultiScaled) + 'rem', {
					lineHeight: (64 * remMultiScaled) + 'rem',
				}],
				'display-medium': [(45 * remMultiScaled) + 'rem', {
					lineHeight: (52 * remMultiScaled) + 'rem',
				}],
				'display-small': [(36 * remMultiScaled) + 'rem', {
					lineHeight: (44 * remMultiScaled) + 'rem',
				}],
				// HEADLINE STYLES
				'headline-large': [(32 * remMultiScaled) + 'rem', {
					lineHeight: (40 * remMultiScaled) + 'rem',
					fontWeight: '500',
				}],
				'headline-medium': [(28 * remMultiScaled) + 'rem', {
					lineHeight: (36 * remMultiScaled) + 'rem',
					fontWeight: '500',
				}],
				'headline-small': [(24 * remMultiScaled) + 'rem', {
					lineHeight: (32 * remMultiScaled) + 'rem',
				}],
				// TITLE STYLES
				'title-large': [(22 * remMulti) + 'rem', {
					lineHeight: (28 * remMulti) + 'rem',
					letterSpacing: '-0.01em',
					fontWeight: '400',
				}],
				'title-medium': [(16 * remMulti) + 'rem', {
					lineHeight: (24 * remMulti) + 'rem',
					letterSpacing: (0.25 * remMulti) + 'em',
					fontWeight: '700',
				}],
				'title-small': [(14 * remMulti) + 'rem', {
					lineHeight: (20 * remMulti) + 'rem',
					letterSpacing: (0.1 * remMulti) + 'em',
					fontWeight: '700',
				}],
				// LABEL STYLES
				'label-large': [(14 * remMulti) + 'rem', {
					lineHeight: (20 * remMulti) + 'rem',
					letterSpacing: (0.1 * remMulti) + 'em',
					fontWeight: '500',
				}],
				'label-medium': [(12 * remMulti) + 'rem', {
					lineHeight: (16 * remMulti) + 'rem',
					letterSpacing: (0.5 * remMulti) + 'em',
					fontWeight: '500',
				}],
				'label-small': [(11 * remMulti) + 'rem', {
					lineHeight: (16 * remMulti) + 'rem',
					letterSpacing: (0.5 * remMulti) + 'em',
					fontWeight: '500',
				}],
				// BODY STYLES
				'body-large': [(16 * remMulti) + 'rem', {
					lineHeight: (24 * remMulti) + 'rem',
					letterSpacing: (0.5 * remMulti) + 'em',
					fontWeight: '400',
				}],
				'body-medium': [(14 * remMulti) + 'rem', {
					lineHeight: (20 * remMulti) + 'rem',
					letterSpacing: (0.25 * remMulti) + 'em',
					fontWeight: '400',
				}],
				'body-small': [(12 * remMulti) + 'rem', {
					lineHeight: (16 * remMulti) + 'rem',
					letterSpacing: (0.4 * remMulti) + 'em',
					fontWeight: '400',
				}],
				// TECHNICAL STYLES 
				'technical-large': [(16 * remMulti) + 'rem', {
					lineHeight: (24 * remMulti) + 'rem',
					letterSpacing: (0.5 * remMulti) + 'em',
					fontWeight: '400',
				}],
				'technical-medium': [(14 * remMulti) + 'rem', {
					lineHeight: (20 * remMulti) + 'rem',
					letterSpacing: (0.25 * remMulti) + 'em',
					fontWeight: '400',
				}],

				'technical-small': [(12 * remMulti) + 'rem', {
					lineHeight: (16 * remMulti) + 'rem',
					letterSpacing: (0.4 * remMulti) + 'em',
					fontWeight: '400',
				}],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
