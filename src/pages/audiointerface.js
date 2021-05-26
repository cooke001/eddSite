import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Audio = () => (
  <Layout>
    <SEO title="Audio" />
    <h1>M-Audio Interface setup</h1>
    <p>If you can see this, you're using my audio interface.</p>
    <p>The audio interface is the M-Audio Fast Track 2.</p>
    <p>The <a href='https://m-audio.com/support/download/drivers/m-track-mkii-windows-driver-v1.0.2'>required drivers</a> need to be installed.</p>
    <p>I'd recommend using audacity, as it's free!</p>
    <p>For technical support, please contact who you hired it from.</p>
  </Layout>
)

export default Audio
