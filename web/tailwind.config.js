/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    'node_modules/flowbite-react/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'myBlack': '#272727',
        'myYellow': '#E1DABD',
        'myOrange': '#E3B23C',
        'myPink': '#EDADC7',
        'myBlue': '#90FCF9',
        'myIvory': '#FBFFE1',
        'myRed': '#6A041D',
        'myLightGray': '#747474',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ]
}

