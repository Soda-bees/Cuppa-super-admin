/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        borderColor: "#EBEBEB",
        darkerGreen: "#297D77",
        green: "#5FAFA9",
        darkerBlue: "#151D48",
        gray : "#425166",
        lightGray : "#425166",
        lightGreen : "#16C098",
        bgColor : "#727272",
        textColor : "#8C8C8C",
        coffeebeansbg : "#C4C4C4",
        bgSettings : "#F3F3F3",
        bgtoggle : "#D7D3D3",
        bgLogin :"#F6F6F6",
        orderColor:"#979797"
      }
    },
  },
  plugins: [],
}

