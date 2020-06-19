module.exports = {
  siteMetadata: {
    title: `SEKAI.ID`,
    author: `SEKAI.ID`,
    description: `Berbagai Hal Tentang Anime, Manga & Jepang`,
    siteUrl: `https://sekai.id/`,
    social: {
      twitter: `sekaidotid`,
      fb: `sekaidotid`,
      ig: `sekaidotid`,
      tg: `sekaidotid`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-plugin-advanced-sitemap`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-109825194-2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SEKAI.ID`,
        short_name: `SEKAI.ID`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#E4002B`,
        display: `minimal-ui`,
        icon: `content/assets/logo-sekaidotid-fav.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
