const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://example.com",
    title: "Gatsby base starter",
    author: "Aurora Digital",
    description:
      "A gatsby starter with ESLint, Prettier, Stylelint, Postcss modules and analytics",
    keywords: "gatsby, starter, eslint, postcss, analytics",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingIDhere",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
