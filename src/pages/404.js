import React from "react"
import { graphql } from "gatsby"
import Kosaki from "../pages/404.jpg"
import AdSense from "react-adsense"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1 className="text-5xl font-black mt-16 mb-8">Not Found</h1>
      <p className="mb-8">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <img src={Kosaki} alt="404: Not Found" />
      <AdSense.Google
        client="ca-pub-6599086733747900"
        slot="7220962165"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
