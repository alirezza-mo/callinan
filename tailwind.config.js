/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        'bgLogin': "url('../public/images/bg-login.jpg')"
      } ,
      fontFamily :{
        'dana' : 'dana' ,
        'danaMedium' : 'dana-medium' ,
        'danaBold' : 'dana-Bold' ,
      }
    },
  },
  plugins: [],
}

