/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDeep: "#050816",
        bgDark: "#0B1020",
        bgCard: "#111827",
        accentBlue: "#00D4FF",
        accentPurple: "#8B5CF6",
        accentCyan: "#22D3EE",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'flicker': 'flicker 0.15s infinite',
        'scanline': 'scanline 10s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.2), inset 0 0 5px rgba(0, 212, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.6), inset 0 0 10px rgba(0, 212, 255, 0.3)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '41%': { opacity: 0.97 },
          '42%': { opacity: 0.75 },
          '43%': { opacity: 0.98 },
          '45%': { opacity: 0.9 },
          '46%': { opacity: 1 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'spin-reverse': {
          'to': { transform: 'rotate(-360deg)' }
        }
      }
    },
  },
  plugins: [],
}
