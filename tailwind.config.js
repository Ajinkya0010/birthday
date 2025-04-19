/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // This tells Tailwind to scan these files for classes
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 20s linear infinite',
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100vh)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
