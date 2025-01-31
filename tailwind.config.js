/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },

      backgroundColor: {
        title2: "#f8f9ff",
        title3: "#006bff",
      },
      colors: {
        main02: "#757693",
        btn: "#006bff",
      },
    },
  },
  mode: "jit",
};
