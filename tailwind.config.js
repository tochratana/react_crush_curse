const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      primaryColor: "#f43f5e",
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
