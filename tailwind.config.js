module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75', 
        '200': '2', 
      },
      transitionDuration: {
        // '0': '0ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
      colors: {
        'slight-black': 'rgba(255,255,255, 0.1)',
      },
      blur: {
        'min': '1px',
        'vsm': '2px',
      },
    },
  },
  plugins: [],
}
