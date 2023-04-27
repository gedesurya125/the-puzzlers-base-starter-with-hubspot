module.exports = {
  siteMetadata: {
    title: 'Name of page',
    description:
      // eslint-disable-next-line max-len
      'Default SEO Description',
    shortTitle: 'Default short title ',
    shortDescription:
      // eslint-disable-next-line max-len
      'Default short description',
    author: 'MDL Bau',
    url: 'https://www.example.de',
    locales: {
      default: 'en'
    }
  },
  plugins: [
    'gatsby-theme-thepuzzlers-core',
    {
      resolve: 'gatsby-theme-thepuzzlers-legal-pages',
      options: {
        vimeo: false
      }
    },
    {
      resolve: 'gatsby-theme-thepuzzlers-intl',
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ['en'],
        // language file path
        locales: {
          default: 'en',
          translations: [{ pathPrefix: 'de', hreflang: 'de' }]
        },
        translatedPaths: [
          { default: 'contact', de: 'kontakt' },
          { default: 'privacy-policy', de: 'datenschutz' },
          { default: 'legal', de: 'impressum' }
        ]
      }
    },
    // for nav data
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/data'
      }
    },
    {
      resolve: 'gatsby-source-keepitsimple',
      options: {
        prefix: 'test-project'
      }
    },
    {
      resolve: 'gatsby-source-hubspot-forms',
      options: {
        apiKey: 'pat-na1-34dc3539-7603-44e3-b7fa-68cde5bb20ea'
      }
    }
  ]
};
