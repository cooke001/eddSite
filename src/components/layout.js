import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
// 
  return (
    <>
    <Helmet
    meta={[
      {
        name: `theme-color`,
        content: 'rgb(27, 128, 109)',
      },
    ]}>
       </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960, 
        }}
      >
        <main>{children}</main>
        
      </div>
      <Footer/>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
