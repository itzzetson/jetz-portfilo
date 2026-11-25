/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080D1B',
        navy: '#111D3A',
        royal: '#244B9B',
        sky: '#55A6FF',
        lavender: '#B7A5F5',
        gold: '#F5C451',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'glass-blue': '0 10px 40px -10px rgba(36, 75, 155, 0.35)',
        'glow-sky': '0 0 28px rgba(85, 166, 255, 0.25)',
        'glow-lavender': '0 0 24px rgba(183, 165, 245, 0.18)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(85, 166, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(85, 166, 255, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
