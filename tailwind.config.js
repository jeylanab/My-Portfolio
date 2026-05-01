/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff88',
          dark: '#00cc6a',
          light: '#33ffaa',
          glow: 'rgba(0, 255, 136, 0.3)',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          card: '#0f0f1a',
          surface: '#141420',
          border: '#1e1e2e',
          muted: '#252535',
        },
        light: {
          DEFAULT: '#f8fafc',
          card: '#ffffff',
          surface: '#f1f5f9',
          border: '#e2e8f0',
          muted: '#94a3b8',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        body: ['Rajdhani', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,255,136,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(0,255,136,0.8)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(0,255,136,0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0,255,136,0.3)',
        'glow-md': '0 0 30px rgba(0,255,136,0.4)',
        'glow-lg': '0 0 60px rgba(0,255,136,0.5)',
        'card-dark': '0 8px 32px rgba(0,0,0,0.4)',
        'card-light': '0 8px 32px rgba(0,0,0,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
