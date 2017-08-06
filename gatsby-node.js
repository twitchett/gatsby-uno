const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve('src/templates/post-md-tpl.js')
  const pageTemplate = path.resolve('src/templates/page-md-tpl.js')
  // graphQL query to fetch all markdown pages
  const query = `{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            pagetype
          }
        }
      }
    }
  }`

  return graphql(query)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          let tpl = getTemplateForNode(node)
          createPage({
            path: node.frontmatter.path,
            component: tpl,
            context: {} // additional data can be passed via context
          })
        })
    })

    function getTemplateForNode (node) {
      if (node.frontmatter.pagetype === 'page') return pageTemplate
      if (node.frontmatter.pagetype === 'post') return postTemplate
    }
}