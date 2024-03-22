/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Varela", "sans-serif"],
      // Aquí puedes agregar otras variantes de fuente si las tienes
    }
  },
  plugins: [],
};
