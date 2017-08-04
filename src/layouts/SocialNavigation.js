import React from 'react'
import Link from 'gatsby-link'

const SocialNavigation = ({ cfg }) => {
  const items = [
    { key: "email", href: "", label: "email" },
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


const Navigation = () => (
  <nav className="cover-navigation cover-navigation--primary">
      <ul className="navigation">
          {/* TODO capture current page */}
          <li className="navigation__item active">
              <a href="/blog" title="it's a blog" className="blog-button">Blog</a>
          </li>
          <li className="navigation__item">
              <a href="/gallery" title="hire me" className="blog-button">Gallery</a>
          </li>
          <li className="navigation__item">
              <a href="/cv" title="hire me" className="blog-button">CV</a>
          </li>
          <li className="navigation__item">
              <a href="/about" title="about this site" className="blog-button">About</a>
          </li>
      </ul>
  </nav>
)

export default { Navigation, SocialNavigation }