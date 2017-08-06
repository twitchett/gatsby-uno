module.exports = {
  siteMetadata: {
    title: 'Gatsby Uno',
    author: 'Tabitha Goodall',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    // for converting Markdown files to pages
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    // for converting JS files to pages
    `gatsby-transformer-javascript-static-exports`,
  ]
}
