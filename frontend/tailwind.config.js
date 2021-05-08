const shade = require("./styles/config");
module.exports = Object.assign({}, shade, {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
});
