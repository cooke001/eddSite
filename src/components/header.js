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
            <li><a href="/projects" style={{textDecoration: `none`, float: 'right'}}> Projects </a></li> 
            <li><a href="/about" style={{textDecoration: `none`, float: 'right'}}> About &nbsp; </a></li> 
          </ul> 
        </nav>
        <div class="dropdown">
          <button class="dropbtn"><a href="/" style={{textDecoration: `none`, float: 'left'}}> {siteTitle} </a></button>
          <div class="dropdown-content">
          <a href="/about" style={{textDecoration: `none`, float: 'right'}}> About </a>
          <a href="/projects" style={{textDecoration: `none`, float: 'right'}}> Projects </a> 
          </div>
        </div>
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