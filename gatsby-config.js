/* eslint-disable @typescript-eslint/no-var-requires */
const website = require('./config/website');
const languages = require('./config/languages');

const pathPrefix = website.pathPrefix === `/` ? `` : website.pathPrefix;

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    pathPrefix,
    siteUrl: website.url + pathPrefix,
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    image: website.image,
    siteLanguage: website.siteLanguage,
    headline: website.headline,
    author: website.author,
    twitter: website.twitter,
    languages,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`, `currying`],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WXKL5L4',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsId,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: `${pathPrefix}/?utm_source=a2hs`,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `standalone`,
        icon: website.favicon,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro'],
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
};
