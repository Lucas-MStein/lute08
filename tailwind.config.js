/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {

      // 🎨 Zentrales Farbsystem
      colors: {
        primary: '#0b0f1a',
        accent: '#ff0055',
        muted: '#94a3b8',
      },

      // 🔤 Saubere Default-Font
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      // 🧱 Konsistente Radien
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },

      // 🌫️ Weichere Shadows für Cards
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.15)',
      },

      // 🎞️ Smooth Animations
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

    },
  },

  // ❌ Safelist entfernt (nur nötig wenn dynamisch generiert)
  safelist: [],

  plugins: [],
};