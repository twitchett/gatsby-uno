import React from 'react'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle.js'
import cfg from '../site-config.js'

/**
* Template that takes .md files with pagetype: post frontmatter property,
* and converts them to Gatsby pages.
*/
export default function PostTemplate ({
  data // injected by the GraphQL pageQuery
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { title, subtitle, date } = post.frontmatter
  return (
    <article className="post-container">
      <Helmet title={ `Your Blog Name - ${title}` } />
      <PageTitle title={ title } />
      { subtitle && <h2 className="post-subtitle">{ subtitle }</h2> }
      <div className="post-meta">
        <time className="post-list__meta--date date">{ date }</time>
        {/* tags */}
        {/* categories */}
      </div>
      <section className="post" dangerouslySetInnerHTML={{ __html: post.html }} />
      { cfg.disqus_shortname && <section id="disqus_thread"></section> }
    </article>
  )
}

export const pageQuery = graphql`
  query MarkdownPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        tags
        categories
      }
    }
  }`