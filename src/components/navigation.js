import React from 'react'
import Link from 'gatsby-link'

/**
* Generates a list of page links from pages under /src/pages
*/
class Navigation extends React.Component {
  render() {
    let current = this.props.current
    return (
      <nav className="cover-navigation cover-navigation--primary">
          <ul className="navigation">
              {/* TODO capture current page */}
              <li className="navigation__item active">
                  <Link to="/blog" title="it's a blog" className="blog-button">Blog</Link>
              </li>
              <li className="navigation__item">
                  <Link to="/about" title="about this site" className="blog-button">About</Link>
              </li>
              <li className="navigation__item">
                  <Link to="/contact" title="contact me" className="blog-button">Contact</Link>
              </li>
          </ul>
      </nav>
    )
  }
}

/**
* Generates a list of social link icons from Config properties
*/
const SocialNavigation = ({ cfg }) => {
  const items = [
    { key: "email", href: "mailto:", label: "email" },
    { key: "twitter", href: "http://twitter.com/", label: "Twitter" },
    { key: "facebook", href: "http://fb.me/", label: "Facebook" },
    { key: "github", href: "https://www.github.com/", label: "GitHub" },
    { key: "linkedin", href: "https://www.linkedin.com/in/", label: "LinkedIn" }
  ]

  return (
    <nav className="cover-navigation navigation--social">
      <ul className="navigation">
      {
        items
          .filter(item => cfg[item.key])
          .map(item => {
            return (
              <li className="navigation__item">
                <Link to={ item.href + cfg[item.key] }>
                  <i className={ `icon icon-social-${item.key}` }></i>
                  <span className="label">{ item.label }</span>
                </Link>
              </li>
            )
          })
      }
      </ul>
    </nav>
  )
}

export default { Navigation, SocialNavigation }