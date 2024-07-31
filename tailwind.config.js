// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'skranji': ['Skranji', 'cursive'],
      },
      fontSize: {
        'custom-48': '48px',
      },
    },
  },
  plugins: [],
}
