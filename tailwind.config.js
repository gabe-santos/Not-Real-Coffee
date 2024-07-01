/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        glass: 'rgb(255 255 255 / 0.1)'
      },
      colors: {
        black: '#0F0E12',
        grey: '#CDCDCD'
      },
      fontFamily: {
        // sans: ['Overused Grotesk']
      },
      maxWidth: {
        screen: '1920px'
      },
      /* @link https://utopia.fyi/type/calculator?c=320,18,1.333,1440,24,1.333,5,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      fontSize: {
        md: 'var(--step-0)',
        lg: 'var(--step-1)',
        xl: 'var(--step-2)',
        '2xl': 'var(--step-3)',
        '3xl': 'var(--step-4)',
        '4xl': 'var(--step-5)',
        '5xl': 'var(--step-6)',
        '6xl': 'var(--step-7)',
        '7xl': 'var(--step-8)'
      },
      spacing: {
        'fluid-4': '',
        'fluid-6': 'clamp(0.375rem, 0.3393rem + 0.1786vi, 0.5rem);',
        'fluid-8': 'clamp(0.5rem, 0.4643rem + 0.1786vi, 0.625rem);',
        'fluid-12': 'clamp(0.75rem, 0.6964rem + 0.2679vi, 0.9375rem);',
        'fluid-16': 'clamp(1rem, 0.9286rem + 0.3571vi, 1.25rem);',
        'fluid-48': 'clamp(1.5rem, 1.3929rem + 0.5357vi, 1.875rem);',
        '3xs': 'var(--space-3xs)',
        '2xs': 'var(--space-2xs)',
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-glass': {
          '@apply bg-white/30 backdrop-blur-lg': {}
        },
        '.pill': {
          '@apply h-lg px-sm rounded-3xl': {}
        }
      });
    }
  ]
};
