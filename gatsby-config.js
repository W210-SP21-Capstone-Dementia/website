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
        background_color: `#f8f8f8`,
        theme_color: `##f8f8f8`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
