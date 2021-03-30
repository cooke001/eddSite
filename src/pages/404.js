import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>No need to be upset!</p>
    <p>Back to safety <a href="/">here</a>.</p>
    <p>Alternatively, click <a href="https://www.youtube.com/watch?v=eY52Zsg-KVI&ab_channel=JulianJapenga">here</a>.</p>
  </Layout>
)

export default NotFoundPage
