module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
      xxl: { min: '1440px' },
    },
    width: {
      640: 'var(--w-640)',
      768: 'var(--w-768)',
      1024: 'var(--w-1024)',
      1280: 'var(--1280)',
      1440: 'var(--1440)',
    },
    minWidth: {
      640: 'var(--min-640)',
      768: 'var(--min-768)',
      1024: 'var(--min-1024)',
      1280: 'var(--min-1280)',
      1440: 'var(--min-1440)',
    },
    maxWidth: {
      640: 'var(--max-w-640)',
      1440: 'var(--max-w-1440)',
    },
    colors: {
      black: 'var(--black)',
      white: 'var(--white)',
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
    },
    fontSize: {
      xs: 'var(--font-12)',
      sm: 'var(--font-14)',
      base: 'var(--font-16)',
      lg: 'var(--font-18)',
      xl: 'var(--font-20)',
      '1xl': 'var(--font-22)',
      '2xl': 'var(--font-24)',
      '3xl': 'var(--font-30)',
      '4xl': 'var(--font-36)',
      '5xl': 'var(--font-48)',
      '6xl': 'var(--font-60)',
      '7xl': 'var(--font-72)',
    },

    fontWeight: {
      thin: 'var(--font-weight-100)',
      extralight: 'var(--font-weight-200)',
      light: 'var(--font-weight-300)',
      normal: 'var(--font-weight-400)',
      medium: 'var(--font-weight-500)',
      semibold: 'var(--font-weight-600)',
      bold: 'var(--font-weight-700)',
      'extra-bold': 'var(--font-weight-800)',
      black: 'var(--font-weight-900)',
    },
    letterSpacing: {
      tighter: 'var(--letter-space-xs)',
      tight: 'var(--letter-space-sm)',
      normal: 'var(--letter-space-normal)',
      wide: 'var(--letter-space-wide)',
      wider: 'var(--letter-space-wider)',
      widest: 'var(--letter-space-widest)',
    },
    lineHeight: {
      1: 'var(--lh-12)',
      2: 'var(--lh-14)',
      3: 'var(--lh-16)',
      4: 'var(--lh-18)',
      5: 'var(--lh-20)',
      6: 'var(--lh-22)',
      7: 'var(--lh-24)',
      8: 'var(--lh-26)',
      9: 'var(--lh-28)',
      10: 'var(--lh-30)',
      11: 'var(--lh-32)',
      12: 'var(--lh-34)',
      13: 'var(--lh-36)',
      14: 'var(--lh-38)',
      15: 'var(--lh-40)',
      none: 'var(--lh-1)',
      tight: 'var(--lh-tight)',
      snug: 'var(--lh-snug)',
      normal: 'var(--lh-normal)',
      relaxed: 'var(--lh-relaxed)',
      loose: 'var(--lh-loose)',
    },
  },
  plugins: [],
};
