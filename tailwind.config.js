module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Festival Gold
        primary: {
          50: "#FEFCF3",
          100: "#FDF8E1",
          200: "#FAF0C4",
          300: "#F6E8A6",
          400: "#F2DF89",
          500: "#D4AF37", // gold-500 - Main primary
          600: "#B8941F", // gold-600
          700: "#9C7A17", // gold-700
          800: "#80600F", // gold-800
          900: "#644607", // gold-900
          DEFAULT: "#D4AF37", // gold-500
        },
        
        // Secondary Colors - Warm Crimson
        secondary: {
          50: "#FDF2F4",
          100: "#FCE4E8",
          200: "#F8C9D1",
          300: "#F4AEBA",
          400: "#F093A3",
          500: "#DC143C", // crimson-500 - Main secondary
          600: "#C01133", // crimson-600
          700: "#A40E2A", // crimson-700
          800: "#880B21", // crimson-800
          900: "#6C0818", // crimson-900
          DEFAULT: "#DC143C", // crimson-500
        },
        
        // Accent Colors - Sage Green
        accent: {
          50: "#F7F9F5",
          100: "#EFF3EB",
          200: "#DFE7D7",
          300: "#CFDBC3",
          400: "#BFCFAF",
          500: "#9CAF88", // sage-500 - Main accent
          600: "#849674", // sage-600
          700: "#6C7D60", // sage-700
          800: "#54644C", // sage-800
          900: "#3C4B38", // sage-900
          DEFAULT: "#9CAF88", // sage-500
        },
        
        // Background Colors
        background: "#FEFEFE", // warm-white
        surface: "#F8F9FA", // gray-50
        
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#6C757D", // gray-600
        },
        
        // Status Colors
        success: "#28A745", // green-600
        warning: "#FFC107", // amber-400
        error: "#E74C3C", // red-500
        
        // Border Colors
        border: {
          DEFAULT: "#E9ECEF", // gray-200
          light: "#F1F3F4", // gray-100
          dark: "#DEE2E6", // gray-300
        },
      },
      
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Headlines and CTAs
        'source-sans': ['Source Sans Pro', 'sans-serif'], // Body text
        lora: ['Lora', 'serif'], // Accents and testimonials
        sans: ['Source Sans Pro', 'sans-serif'], // Default sans
        serif: ['Lora', 'serif'], // Default serif
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 56px
        'display': ['3rem', { lineHeight: '1.2', fontWeight: '600' }], // 48px
        'heading-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }], // 40px
        'heading-2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }], // 32px
        'heading-3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
        'heading-4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }], // 12px
      },
      
      boxShadow: {
        'subtle': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'hover': '0 6px 12px rgba(0, 0, 0, 0.12)',
        'focus': '0 0 0 3px rgba(212, 175, 55, 0.3)', // primary-500 with opacity
      },
      
      borderRadius: {
        'card': '0.75rem', // 12px
        'button': '0.5rem', // 8px
      },
      
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
      },
      
      transitionDuration: {
        '400': '400ms',
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      
      animation: {
        'fade-in': 'fadeIn 400ms ease-out forwards',
        'fade-in-up': 'fadeInUp 400ms ease-out forwards',
        'celebration': 'celebration 600ms ease-out forwards',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        celebration: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}