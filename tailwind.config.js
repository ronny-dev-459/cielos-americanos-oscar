/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Paleta principal
                primary: {
                    50: '#f0fdfd',
                    100: '#cdf9f7',
                    200: '#9bf2ef',
                    300: '#5ee6e2',
                    400: '#2dcfcb',
                    500: '#007C89', // Color primario principal
                    600: '#006a75',
                    700: '#005760',
                    800: '#00464e',
                    900: '#003a42',
                },
                // Grises para textos
                text: {
                    primary: '#2B2E33',
                    secondary: '#4B5563',
                    light: '#6B7280',
                    muted: '#9CA3AF',
                },
                // Fondos
                background: {
                    primary: '#FFFFFF',
                    secondary: '#E5F4F3',
                    dark: '#F9FAFB',
                },
                // Mantener brand para compatibilidad
                brand: {
                    50: '#f0fdfd',
                    100: '#E5F4F3',
                    500: '#007C89',
                    600: '#007C89',
                    700: '#006a75',
                }
            },
            fontFamily: {
                sans: ['Bai Jamjuree', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}


