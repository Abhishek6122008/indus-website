const config = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a1628',
          900: '#0f2444',
          800: '#1e3a5f',
          700: '#2d4f7c',
          600: '#3d6899',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = config
