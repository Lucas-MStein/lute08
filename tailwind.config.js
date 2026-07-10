/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // Brand-Farben (Comedy/Reaction-Look)
      colors: {
        bg: '#080808',
        surface: '#111111',
        'surface-2': '#181818',
        neon: '#D4FF00',
        hot: '#FF2066',
        ink: '#F0F0F0',
        mute: '#888888',
        // Plattform-Akzente
        tt: '#FF2066',
        yt: '#FF0000',
        ig: '#E1306C',
        tw: '#9146FF',
        dc: '#5865F2',
        // Kompatibilität zu vorhandenem Code
        primary: '#080808',
        accent: '#D4FF00',
        muted: '#888888',
      },

      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },

      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.15)',
        card: '0 16px 48px rgba(0,0,0,0.5)',
        neon: '0 8px 30px rgba(212,255,0,0.35)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fade-up 700ms cubic-bezier(0.4, 0, 0.2, 1) both',
      },
    },
  },

  safelist: [],
  plugins: [],
};
