export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DEFAULT: "rgb(255, 255, 255)",
        white: "rgb(245, 245, 250)",
        grey: "#b9b9b9",
        ["grey-dark"]: "#212121",
        black: "rgb(15, 15, 15)",
        primary: "#3b82f6",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
