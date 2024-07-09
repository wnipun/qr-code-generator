/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue"
  ],
  theme: {
    container: {
        center: true,
    },
    extend: {
        fontFamily: {
            primary: ['Montserrat', 'ui-sans-serif', 'system-ui'],
            secondary: ['Fira Sans', 'ui-sans-serif', 'system-ui']
        }
    },
  },
  plugins: [],
}

