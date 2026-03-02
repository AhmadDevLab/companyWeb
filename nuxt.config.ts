// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Techor IT Solution & Technology Nuxt Js Template',
      meta: [
        {name: 'description', content: 'Techor IT Solution & Technology Nuxt Js Template'},
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:author', content: 'DevstarIT' },
        { property: 'og:site_name', content: 'Techor IT Solution & Technology Nuxt Js Template' },
        { property: 'twitter:card', content: 'summary' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      ],
      script: [],
      bodyAttrs: {
        id: 'body',
        class: 'tv-magic-cursor'
      }
    }
  },
  css: [
    '~/assets/css/font-awesome-pro.css',
    '~/assets/css/custom-animation.css',
    '~/assets/css/spacing.css',
    '~/assets/css/nice-select.css',
    '~/assets/scss/main.scss',
  ],
})
