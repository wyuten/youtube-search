import breakpoints from './src/app/config/breakpoints.js'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: Object.entries(breakpoints).reduce((accum, [name, size]) => {
      accum[name] = `${size}px`
      return accum
    }, {})
  },
  plugins: [],
}

