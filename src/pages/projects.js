import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col } from "reactstrap"
import Carousel from 'react-bootstrap/Carousel'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <StaticImage
      src="../images/scope.jpg"
      alt="An oscilloscope"
      style={{ marginBottom: `1.45rem` }}
    />
    <h1>Projects</h1>

    <Row>
      <Col xs="8">
        <h2>Monopoly board</h2>
        <p>Since about 2015, i've been making a wooden monopoly board. This started as a rainy day project, but over Lockdown 2.0 I had a good crack at finishing it.</p>
        <p>Made with maple, mahogany and eastern red cedar.</p>
        <p>Includes hand cut and laser cut mother of pearl inlays.</p>
      </Col>
      <Col xs="4">
      <Carousel fade prevLabel nextLabel>
        <Carousel.Item>
          <StaticImage
            src="../images/Monopoly/Mono1.jpeg"
          />
        </Carousel.Item> 
        <Carousel.Item>
          <StaticImage
            src="../images/Monopoly/Mono2.jpeg"
          />
        </Carousel.Item> 
        <Carousel.Item>
          <StaticImage
            src="../images/Monopoly/Mono3.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/Monopoly/Mono4.jpeg"
          />
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
    <h2>To add:</h2>
    <p>Nixie Clock</p>
    <p>Monopoly Board</p>
    <p>Mini Theatre Project</p>
    <p>Space themed Space bar</p>
  </Layout>
)

export default Projects