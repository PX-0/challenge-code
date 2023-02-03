/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "invalid"],
    borderColor: ["responsive", "hover", "focus", "invalid"],
  },
  plugins: [require("tailwindcss-invalid-variant-plugin")],
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius:{
        '4xl':'2.5rem',
        '5xl':'3.5rem',
        '6xl':'7rem'
      },
      colors:{
        'dark':'#26282b'
      },
      fontFamily: {
        jp: ['Noto Sans JP','sans'],
        teko:['Teko','sans'],
        kanit:['Kanit','sans']
      },
      backgroundImage:{
        blob:"url(../src/assets/bg.svg)",
        blobStatic:"url(../src/assets/bg2.svg)",
        line:"url(../src/assets/BgLine.svg)"
      }
    },
  },
  plugins: [],
}
