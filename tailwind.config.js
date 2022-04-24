module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend:{
      backgroundImage: {
        'login-banner': 'url(\'assets/images/loginbanner.png\')',
       
      },
      backgroundColor:{
        'theme-bg-white':'#FBFBFB',

      }
    }
  },
  plugins: [],
};