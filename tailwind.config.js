/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0fdff',
                    100: '#ccf7fe',
                    600: '#0FB5C4',
                    700: '#0AA0AC',
                }
            },
            fontFamily: {
                sans: ['Bai Jamjuree', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}


