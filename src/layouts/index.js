import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { Navigation, SocialNavigation } from './navigation.js'
import cfg from '../site-config.js'
import cover from '../images/cover.jpg'
import profile from '../images/profile.jpg'

import '../css/main.css'

const Header = () => (
  <header className="panel-cover panel-cover--collapsed header-page-pagetype" style={{ backgroundImage: "url(" + cover + ")" }}>
    <div className="panel-main">

      <div className="panel-main__inner panel-inverted">
        <div className="panel-main__content">
          <Link to="/">
            <img src={ profile } className="user-image" alt={ cfg.author } />
            <h1 className="panel-cover__title panel-title">{ cfg.title }</h1>
          </Link>
          <hr className="panel-cover__divider"></hr>
          <p className="panel-cover__description">{ cfg.description }</p>

          <hr className="panel-cover__divider panel-cover__divider--secondary"></hr>

          <div className="navigation-wrapper">
            <Navigation />
            <hr className="panel-cover__divider panel-cover__divider--secondary"></hr>
            <SocialNavigation cfg={ cfg } />
          </div>

        </div>
      </div>
      <div className="panel-cover--overlay"></div>
    </div>
  </header>
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
