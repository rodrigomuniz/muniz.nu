module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    colors: {
      'purple':       '#5F4B8B',
      'purple-txt':   '#3D2D61',
      'deep-purple':  '#3D2D61',
      'pink':         'rgb(255, 0, 101)',
    },
    fontFamily: {
      sans: ['Source Sans Pro',
      '-apple-system', 'BlinkMacSystemFont',
      'avenir next', 'avenir',
      'helvetica neue', 'helvetica',
      'ubuntu',
      'roboto', 'noto',
      'segoe ui', 'arial',
      'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}