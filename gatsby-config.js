module.exports = {
  siteMetadata: {
    title: `KojimaYouhei`,
    description: `I work as a web designer.I have made a web advertise mainly.`,
    author: `@kojima`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff8100`,
        theme_color: `#ff8109`,
        display: `minimal-ui`,
        icon:`src/images/mysite_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
     resolve: 'gatsby-plugin-web-font-loader',
     options: {
       google: {
         families: ['Noto Sans JP']
       }
     }
   },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
