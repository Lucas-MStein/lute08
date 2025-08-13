/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lily: ['"Lily Script One"', 'cursive'],
      },
    },
  },
  safelist: [
    'order-1',
    'order-2',
    'sm:order-1',
    'sm:order-2',
    'md:order-1',
    'md:order-2',
  ],
  plugins: [],
};