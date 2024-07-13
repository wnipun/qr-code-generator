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
        },
        colors: {
            white: {
                DEFAULT: '#fff',
                'ghost': '#f7f8fc'
            },
            black: {
                DEFAULT: '#000',
                charcoal: '#3c4a5b'
            },
            green: {
                DEFAULT: '#49cc68',
                honeydew: '#e7f7e9'
            }
        }
    },
  },
  plugins: [],
}

