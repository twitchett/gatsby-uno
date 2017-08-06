import React from 'react'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle.js'

/**
* Template that takes .md files with pagetype: page frontmatter property,
* and converts them to Gatsby pages.
*/
export default function PageTemplate ({
  data // injected by the GraphQL pageQuery
}) {
  const { markdownRemark: page } = data // data.markdownRemark holds our page data
  return (
    <article className="page-container">
      <Helmet title={ `Your Blog Name - ${page.frontmatter.title}` } />
      <PageTitle title={ page.frontmatter.title } />
      <section className="page" dangerouslySetInnerHTML={{ __html: page.html }} />
    </article>
  )
}

export const pageQuery = graphql`
  query MarkdownPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }`