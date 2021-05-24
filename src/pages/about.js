import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "reactstrap"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <Row>
      <Col xs="4">
        <StaticImage
          src="../images/me.jpg"
          style={{ width: 300, height: 300 }}
        />
      </Col>
      <Col xs = "8">
        <p>I'm Edward Cooke, a PhD student at the University of Manchester. My research is related to Underwater Robotics; I designed and built an underwater glider called the UnderGRND.</p>
        <p>Underwater Gliders work by changing their buoyancy to move forwards and backwards. This is an incredibly efficent way of moving underwater, and also has the advantage this it produces very little turbulent motion in comparison to traditional underwater propulsion methods.</p>
        <p>In my free time I help run a venue at the Edinburgh Fringe Festival, tinker with electronics (see my about section), and run around Manchester.</p>
      </Col>
    </Row>
  </Layout>
)

export default About
