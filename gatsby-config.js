module.exports = {
  siteMetadata: {
    title: `Ryan Cybul Web Developer`,
    description: `Web development portfolio for Ryan Cybul`,
    author: `Ryan Cybul`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Futura", "Open Sans"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
  pathPrefix: `/portfolio`,
};
