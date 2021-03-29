import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,  
        }}
      >
      <h1 style={{ 
        margin: '0 auto'
        }}>
        <nav>
          <ul> 
            <li><a href="/" style={{
              color: `white`,
              textDecoration: `none`,
              float: 'left'
              }}>
                {siteTitle}
            </a></li> 
            <li><a href="/about" style={{
              color: `white`,
              textDecoration: `none`,
              float: 'right',
              }}>
                About
            </a></li>   
            <li><a href="/projects" style={{
              color: `white`,
              textDecoration: `none`,
              float: 'right',
              }}>
                Projects
            </a></li> 
          </ul> 
          <select> 
            <option value="" selected="selected">Edward Cooke</option> 
            <option value="/">Home</option> 
            <option value="/about">About</option> 
            <option value="/projects">Projects</option> 
        </select> 
        </nav>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header