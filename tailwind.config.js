
const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
   
    animation: {
      "gradient-border": "gradient-border 4s linear infinite",
      fade: "fadeOut 1s ease-in-out",
      "flame-shadow": "flamePulse 3s ease-in-out infinite",
      //for hero button animation
      slideUp: 'slideUp 0.6s ease-in-out forwards',
      gradientUp: 'slideUp 0.6s ease-in-out forwards',
        whiteRight: 'slideRight 0.6s ease-in-out 0.6s forwards', // Starts after 0.6s

        // for logo animation after hero section
      scroll: "scroll 25s linear infinite",

      // for hero section image sliders
      uuheroscroll: "heroscroll 60s linear infinite",

      scrollUp1: 'scrollUp1 75s linear infinite',
        scrollDown2: 'scrollDown2 75s linear infinite', // Slightly different duration
        scrollUp3: 'scrollUp3 45s linear infinite', // Faster animation
     
    },
    keyframes: {
      "gradient-border": {
        "0%": { backgroundPosition: "0% 50%" },
        "100%": { backgroundPosition: "100% 50%" },
      },

      // for button transsition
      slideUp: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(-100%)' },
      },
      slideRight: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(-5%)' },
      },
      transitionDelay: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      

      fadeOut: {
        "0%": { opacity: "0.7" },
        "100%": { opacity: "0" },
      },
      scroll: {
          "0%": { transform: "translateX(-20)" },
          "100%": { transform: "translateX(-30%)" },
        },

        scrollUp1: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        scrollDown2: {
          '0%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(-80%)' },
        },
        scrollUp3: {
          '0%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(-55%)' },
        },
        
    },
    colors: {
      "light-blue": "black",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px)     { ... }
    },
    extend: {
      zindex: {
        '-1': '-1',
        '-9999': '-9999',
        '-99995': '-99995',

      },
      spacing: {
        'hero-bg': 'var(--hero-bg-spacing)',
      },
      keyframes: {
        heroscroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-55%)" },
        },
      },
      backgroundImage: {
        "gradientBox": "linear-gradient( 90deg, rgb(33, 38, 60, 1), rgb(33, 38, 60, 1), rgb(33, 38, 60, 0.9), rgb(33, 38, 60, 0.7), rgb(0, 99, 136, 0.6), rgb(34, 197, 120, 0.1) )",
        'portfolio-bg': "url('/images/bg.jpg')",
        'portfolio-bg-sm': "url('/images/bg.jpg')",            
      },
                  

      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "body-color": "#788293",
        "body-color-dark": "#959CB1",
        "gray-dark": "#1E232E",
        "gray-light": "#F0F2F9",
        stroke: "#E3E8EF",
        "stroke-dark": "#353943",
        "bg-color-dark": "#171C28",
        "light-blue": "black",
        primaryGradientStart: '#009cff',
        primaryGradientEnd: '#9536e5',
        meta: {
          1: "#DC3545",
          2: "#DC3545",
          3: "#DC3545",
          4: "#DC3545",
          5: "#DC3545",
          6: "#DC3545",
          7: "#DC3545",
          8: "#DC3545",
          9: "#DC3545",
          10: "#DC3545",
        },
  
      },
      //custom css for vertex stack

      buttonColor: {
        bg: "linear-gradient ( 26deg, rgba(255, 255, 255, 0.15) -32.04%, rgba(255, 255, 255, 0) 133.43% )",
      },
     
      
      
      fontSize: {
        "title-xxl" : ["42px", "48px"],
        "hero-font" : ["10rem"]

      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
    },
  },
  plugins: [plugin(function ({ addUtilities }) {
    addUtilities({
      ".animation-reverse": {
        animationDirection: "reverse",
      },
    });
  }),],
};
