module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend:{
      backgroundImage: {
        'login-banner': 'url(\'assets/images/loginbanner.png\')',
        'home-banner': 'url(\'assets/images/Banner1.png\')',
        'home-banner-mobile':'url(\'assets/images/banner1mobile.png\')',
       
      },
      backgroundColor:{
        'theme-bg-white':'#FBFBFB',

      }
    }
  },
  plugins: [],
};