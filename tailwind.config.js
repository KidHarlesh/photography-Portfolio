/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        testimonial: "url('../src/assets/Abstract-Design.png')",
      },
    },
  },
  plugins: [],
};
