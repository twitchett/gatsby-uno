import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import '../css/index.css'; // add some style if you want!

export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark
  console.log('posts', posts)
  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">It's a blog</h1>
      </header>

      <div className="pre-post-list">
      See all: <a href="/tags">tags</a> | <a href="/categories">categories</a>
      </div>

      <hr className="post-list__divider"></hr>

      <div className="main-post-list">

        <ol className="post-list">{
            posts.map(({ node: post }) => {
              return (
                <li key={ post.id }>
                  <h2 className="post-list__post-title post-title">
                    <Link to={ post.frontmatter.path }>{ post.frontmatter.title }</Link>
                  </h2>
                  <p className="excerpt">
                    { post.excerpt }&hellip;
                  </p>
                  <div className="post-list__meta">
                    <time className="post-list__meta--date date">{ post.frontmatter.date }</time> &#8226; 
                    {/* TODO: tags */}
                    {/* TODO: categories */}
                  <hr className="post-list__divider"></hr>
                </div>
                </li>
              )
            })
          }
        </ol>

      {/* TODO: pagination */}

    </div>
  </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;