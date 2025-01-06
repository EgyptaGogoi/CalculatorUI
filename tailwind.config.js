/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : {'light' : '#2388ff', 'dark' : '#1f2b54'} ,
        'deepWhite' : '#f5f7ff',
        'grey' : {
          'deep': '#6e7691',
          'light' : '#d8ddf0'
        },
        'red' : '#ff445a',
        'yellow' : '#ffc804',
        'green' : '#63de77'
      }
    },
  },
  plugins: [],
}

