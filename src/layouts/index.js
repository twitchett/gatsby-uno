import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import cover from '../images/cover.jpg'
import profile from '../images/profile.jpg'

import '../css/main.css'

const Header = () => (
  <header className="panel-cover panel-cover--collapsed header-page-pagetype" style={{ backgroundImage: "url(" + cover + ")" }}>
    <div className="panel-main">

      <div className="panel-main__inner panel-inverted">
        <div className="panel-main__content">
          <a href="/" title="Tabi">
            <img src={ profile } className="user-image" alt="Tabi" />
            <h1 className="panel-cover__title panel-title">head title</h1>
          </a>
          <hr className="panel-cover__divider"></hr>
          <p className="panel-cover__description">site description</p>

          <hr className="panel-cover__divider panel-cover__divider--secondary"></hr>

          <div className="navigation-wrapper">
            <Navigation />
            <hr className="panel-cover__divider panel-cover__divider--secondary"></hr>
            {/* TODO social nav */}
          </div>

        </div>
      </div>
      <div className="panel-cover--overlay"></div>
    </div>
  </header>
)

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

const TemplateWrapper = ({
  children
}) => (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div className="content-wrapper">
        <div className="content-wrapper__inner">
          { children() }
        </div>
        {/* TODO footer */}
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
