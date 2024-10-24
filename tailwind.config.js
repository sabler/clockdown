/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // Add a custom breakpoint for screen sizes 320px and smaller
        xxs: { max: "640px" }, // Targeting devices <= 320px
      },

      fontSize: {
        xxs: ".125rem",
        xs: ".25rem",
        sm: ".312rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
