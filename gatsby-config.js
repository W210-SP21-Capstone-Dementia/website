require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cognition Tracker`,
    description: `Manage the progression of your loved ones' disease`,
    author: `Surya Dutta`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || "none",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `persons`,
        path: `${__dirname}/src/images/persons`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stock`,
        path: `${__dirname}/src/images/stock`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `screenshots`,
        path: `${__dirname}/src/images/screenshots`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/holding-hands.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
