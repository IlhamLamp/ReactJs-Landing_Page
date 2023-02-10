module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Lato',
      secondary: 'Lato',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '748px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      scale: ["active"],
      colors: {
        primary: '#111111',
        secondary: '#576574',
        accent: {
          primary: '#9C69E2',
          primary_hover: '#9059DB',
          secondary: '#F063B8',
          secondary_hover: '#E350A9',
          tertiary: '#68C9BA',
        },
      },
    },
  },
  plugins: [],
}
