import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "reactstrap"

const lostAndFound = () => (
  <Layout>
    <SEO title="Lost and Found" />
    <h1>Lost and Found</h1>
    <Row>
      <Col xs="4">
        <StaticImage
          src="../images/me.jpg"
          style={{ width: 300, height: 300 }}
        />
      </Col>
      <Col xs = "8">
        <p>Hello, if you can see this, you've probably found one of my bits of equipment.</p>
        <p>If you could contact me <a href = "mailto:me@edwardcooke.co.uk?cc=cooke0001@gmail.com&subject=Lost%20and%20Found%20Equipment">by email</a> at me@edwardcooke.co.uk, or on 07787419084.</p>
        <p>I'd really appreciate it!</p>
      </Col>
    </Row>
  </Layout>
)

export default lostAndFound
