/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0077b6',
                secondary: '#00b4d8',
                accent: '#0096c7',
            },
            animation: {
                'gradient-shift': 'gradientShift 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                'slide-left': 'slideLeft 30s linear infinite',
                'bounce-slow': 'bounce 2s ease-in-out infinite',
            },
            keyframes: {
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 10px 40px rgba(0, 119, 182, 0.15)' },
                    '50%': { boxShadow: '0 15px 60px rgba(0, 119, 182, 0.25), 0 5px 30px rgba(0, 180, 216, 0.2)' },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
