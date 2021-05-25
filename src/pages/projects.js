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
        <h2>Monopoly Board</h2>
        <p>Since 2014, I've been making a wooden monopoly board. This started as a rainy day project, but over Lockdown 2.0 I had a good crack at finishing it.</p>
        <p>The board is made with maple, mahogany and eastern red cedar. The board was finished with a polyurethane lacquer. </p>
        <p>Includes hand cut and laser cut mother of pearl inlays. I need to finish casting the player tokens - maybe this year...</p>
      </Col>
      <Col xs="4">
        <StaticImage
          src="../images/Monopoly/Mono1.jpeg"
        />
      </Col>
    </Row>
    <Row>
      <Col xs="4">
        <StaticImage
          src="../images/Monopoly/Mono2.jpeg"
        />
      </Col>
      <Col xs="4"> 
        <StaticImage
          src="../images/Monopoly/Mono3.jpeg"
        />
      </Col>
      <Col xs="4">  
        <StaticImage
          src="../images/Monopoly/Mono4.jpeg"
        />
      </Col>
    </Row>
    <Row>
     
      <Col xs="4">
      <Carousel fade prevLabel nextLabel>
        <Carousel.Item>
          <StaticImage
            src="../images/Nixie/Nixie1.jpeg"
          />
        </Carousel.Item> 
        <Carousel.Item>
          <StaticImage
            src="../images/Nixie/Nixie2.jpg"
          />
        </Carousel.Item> 
        <Carousel.Item>
          <StaticImage
            src="../images/Nixie/Nixie3.jpg"
          />
        </Carousel.Item>
      </Carousel>
      </Col>
      <Col xs="8">
        <h2>Nixie Clock - <a href="https://github.com/cooke001/NixieClock" style={{textDecoration: `none`}}> GitHub </a></h2>
        <p>This Nixie Clock is made up of 2 display boards. By passing Binary Coded Decimal byte to each board over I2C, the tubes show 0-9.</p>
        <p>The clock is controlled by an ESP8266, which updates the time from an NTP server. In case it loses this connection, I added a RTC chip.</p>
        <p>After a power cut, I decided I'd add a battery backup - this takes the form of a lead acid battery and DC UPS.</p>
      </Col>
    </Row>
    <Row>
      <Col xs="8">
        <h2>Space Themed Space Bar</h2>
        <p>I had some left over resin from another project, and inspired by <a href="https://www.youtube.com/watch?v=nMPxqUijUfw" style={{textDecoration: `none`}}>Evan and Katelyn</a>, I decided to give it a go.</p>
        <p>I used burnt out LEDs for the planet shapes. I'd recommend using aniline dies - upon experimentation, I found these worked well. </p>
        <p>The negative mould was cast using silicone mould resin in a LEGO box, and I held the keycap in place using a 3D printed adapter.</p>
      </Col>
      <Col xs="4">
      <Carousel fade prevLabel nextLabel>
        <Carousel.Item>
          <StaticImage
            src="../images/SpaceBar/SpaceBar.jpeg"
          />
        </Carousel.Item> 
        <Carousel.Item>
          <StaticImage
            src="../images/SpaceBar/SpaceBarMould.jpeg"
          />
        </Carousel.Item> 
        <Carousel.Item>
          <StaticImage
            src="../images/SpaceBar/SpaceBarPlanets.jpeg"
          />
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
    <h2>To add:</h2>
    <p>Mini Theatre Project (this will never be finished)</p>
    <p>Binaural head (work in progress...)</p>
    <p>MCB finding tool</p>
    <p>Harry Potter Book Nook</p>
    <p>DarkBlackBoard - forked from Zainja's repository, I've fixed a few bugs with his extension to make blackboard dark</p>
    <p>Assistive screen reader - Similar to putting a ruler in your book, this highlights a strip of your screen in a colour to aid reading.</p>
  </Layout>
)

export default Projects
