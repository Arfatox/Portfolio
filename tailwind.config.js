/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#96defe",
                secondary: "#fff8f8",
                accent: "#f3b7c5",
                dark: "#1d1a3a",
                gradient: {
                    top: "#1d1a3a",
                    middle: "#bd819a",
                    bottom: "#26316E"
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
        },
    },
    plugins: [],
} 