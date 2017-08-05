import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import SideBar from '../components/SideBar.js'
import cfg from '../site-config.js'

import '../css/main.css'

class MasterLayout extends React.Component {
  render() {
    let location = this.props.location.pathname
    let currentPage

    console.log('this.propers', this.props)

    currentPage = this.props.children()
    // this has to be hardcoded for now
    // if (location === '/') {
    //   currentPage = this.props.children()
    // } else if (location === '/about' || location === '/contact') {
    //   currentPage = <PageLayout {...this.props} />
    // } else {
    //   currentPage = <PostLayout {...this.props} />
    // }

    return (
      <div>
        <Helmet
          title={ cfg.meta.title }
          meta={[
            { name: 'description', content: cfg.meta.description },
            { name: 'keywords', content: cfg.meta.keywords },
          ]}
        >
        </Helmet>
        <SideBar currentPage={ location } cfg={ cfg }/>
        <div className="content-wrapper">
          <div className="content-wrapper__inner">
            { currentPage }
          </div>
          {/* TODO footer */}
        </div>
      </div>
    )
  }
}

MasterLayout.propTypes = {
  children: PropTypes.func,
}

export default MasterLayout
