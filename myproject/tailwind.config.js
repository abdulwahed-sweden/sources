module.exports = {
    content: [
      './core/templates/**/*.html',
      './users/templates/**/*.html',
      './static/js/**/*.js',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          arabic: ['Amiri', 'serif'],
        },
        fontSize: {
          'ar-base': '1.1rem',
          'ar-lg': '1.2rem',
          'ar-xl': '1.3rem',
        },
      },
    },
    plugins: [],
  }