module.exports = {
  pathPrefix: `/hackfortress-static-site`,
  siteMetadata: {
    title: `Hackfortress`,
  },
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-react-next`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-3581973-2",
        anonymize: true,
      },
    },
  ],
}
