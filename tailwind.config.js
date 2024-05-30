/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0F0E12',
        grey: '#CDCDCD'
      },
      fontFamily: {
        sans: ['Overused Grotesk']
      },
      maxWidth: {
        'max-screen': '1440px'
      },
      fontSize: {
        'fluid-base': 'clamp(1rem, 0.9286rem + 0.3571vi, 1.25rem);', //16px 20px
        'fluid-lg': 'clamp(1.333rem, 1.136rem + 0.985vi, 2.0225rem);', //21px 32px
        'fluid-xl': 'clamp(1.7769rem, 1.3496rem + 2.1365vi, 3.2724rem);', //28px 52px
        'fluid-2xl': 'clamp(2.3686rem, 1.5325rem + 4.1802vi, 5.2948rem);' //38px 85px
      },
      spacing: {
        'fluid-4': 'clamp(0.25rem, 0.2321rem + 0.0893vi, 0.3125rem);',
        'fluid-6': 'clamp(0.375rem, 0.3393rem + 0.1786vi, 0.5rem);',
        'fluid-8': 'clamp(0.5rem, 0.4643rem + 0.1786vi, 0.625rem);',
        'fluid-12': 'clamp(0.75rem, 0.6964rem + 0.2679vi, 0.9375rem);',
        'fluid-16': 'clamp(1rem, 0.9286rem + 0.3571vi, 1.25rem);',
        'fluid-48': 'clamp(1.5rem, 1.3929rem + 0.5357vi, 1.875rem);'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
};
