import React from 'react'
import Link from 'gatsby-link'
import { Navigation, SocialNavigation } from './navigation.js'

import '../css/main.css'

// hmm
import cover from '../images/cover.jpg'
import profile from '../images/profile.jpg'

class SideBar extends React.Component {
  render() {
    let { currentPage, cfg } = this.props

    return (
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
                <Navigation currentPage={ currentPage }/>
                <hr className="panel-cover__divider panel-cover__divider--secondary"></hr>
                <SocialNavigation cfg={ cfg } />
              </div>

            </div>
          </div>
          <div className="panel-cover--overlay"></div>
        </div>
      </header>
    )
  }
}

export default SideBar