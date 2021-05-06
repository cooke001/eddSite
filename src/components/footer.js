import * as React from "react"


const Footer = () => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
          maxWidth: 960,
          padding: `0rem 1.0875rem`,
      }}
    >
      <p 
        style={{ 
          margin: 0 
        }}
      >
        © {new Date().getFullYear()}, Built by Edward Cooke with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </p>
    </div>
  </footer>
)

export default Footer