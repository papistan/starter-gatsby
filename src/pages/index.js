import React from "react"
import { Link } from "gatsby"

import { Layout, SEO } from "components"

const IndexPage = () => (
  <Layout>
    <SEO title="Jobs" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage