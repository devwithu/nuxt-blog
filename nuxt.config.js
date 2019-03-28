const pkg = require('./package')
const bodyparser = require('body-parser')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: '//fonts.googleapis.com/css?family=Nanum+Gothic'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fa923f', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-fillter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [ 
    '@nuxtjs/axios',
  ],
  // axios: {
  //   baseUrl: process.env.BASE_URL || 'https://nestjsandfirebase.firebaseio.com'
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nestjsandfirebase.firebaseio.com',
    credentials: false,
    fbAPIKey: 'AIzaSyAMvE6h4X7PAS_m5xoriqxMZ05Cbhi7VcM'
  },
  // router: {
  //   linkActiveClass: 'active'
  // },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  router: {
    middleware: 'log'
  },
  serveerMiddleware: [
    bodyparser.json(),
    '~/api'
  ]

}
