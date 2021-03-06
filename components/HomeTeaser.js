import { prefixLink } from 'gatsby-helpers'
import React, { Component, PropTypes } from 'react'
import access from 'safe-access'
import { Link } from 'react-router'

//import Figures from 'components/Figures'


class WorkTeaser extends Component {

  render() {
    const { page } = this.props

    const title = access(page, 'data.title') || page.path
    const pathBits = page.path.split('/')
    const id = pathBits[pathBits.length - 2]
    const blurb = access(page, 'data.blurb') || ''
    const figure = access(page, 'data.figure') || ''

    let Figure = null
    if ( figure ) {
      var style = {
          border: "none"
      };
      let srcFig = prefixLink(page.path) + figure
      Figure = <Link style={style} to={prefixLink(page.path)}><img className="w-auto mt-auto ml-2 mx-3 relative" src={srcFig} alt={prefixLink(page.path)}></img></Link>
    }

    return (
      <figure className="mb-2 flex@sm">
        <div className="mx-1 flexItem-25">
          { Figure }
        </div>
        <figcaption className="flexItem-75 ml-2@sm mt-0">
          <h3 id={id} className="h4 mb-1"><Link to={prefixLink(page.path)} className="camoLink">{title}</Link></h3>
          <p className="mb-0">{blurb}</p>
        </figcaption>
      </figure>
    )
  }
}

WorkTeaser.propTypes = {
  page: PropTypes.object.isRequired
}

export default WorkTeaser
