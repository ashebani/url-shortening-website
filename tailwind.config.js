/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { primary: ["Poppins", "sans-serif"] },
      colors: {
        neutralWhite: "hsl(0, 100%, 100%)",
        primaryCyan: "hsl(180, 66%, 49%)",
        primaryCyanViolet: "hsl(257, 27%, 26%)",
        primaryRed: "hsl(0, 87%, 67%)",
        neutralGary: "hsl(0, 0%, 75%)",
        neutralGrayishViolet: "hsl(257, 7%, 40%)",
        neutralDarkBlue: "hsl(255, 11%, 22%)",
        neutralDarkViolet: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
