module.exports = {
  head: {
    title: 'Nuxt task',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, maximum-scale=1.0' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  css: ['@/styles/main.sass',
      '@/node_modules/bootstrap/dist/css/bootstrap.min.css'],
  styleResources: {
    sass: [
      '@/styles/vars.sass',
    ],
  },
  loading: { color: '#000000' },
  build: {
    vendor: [
      'vue-awesome-swiper',
    ],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  plugins: [
    { src: '~/plugins/swiper-slider.js', mode: 'client' },
  ],
}
