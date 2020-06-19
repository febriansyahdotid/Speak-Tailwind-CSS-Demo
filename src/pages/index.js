import React from "react"
import { Link, graphql } from "gatsby"
import AdSense from "react-adsense"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Beranda" />
      <div className="border shadow-lg mt-4 mb-4">
        <AdSense.Google
          client="ca-pub-6599086733747900"
          slot="7220962165"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
        />
      </div>
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            className="border shadow-lg mt-8 mb-8"
            key={node.fields.slug}
          >
            <header className="text-2xl text-sekai">
              <Link className="" to={node.fields.slug}>
                {title}
              </Link>
              <div className="text-base text-black">
                {node.frontmatter.date}
              </div>
            </header>
            <section>
              <p
                className="text-lg"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
      <div className="border shadow-lg mt-4 mb-4">
        <AdSense.Google
          client="ca-pub-6599086733747900"
          slot="7220962165"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
        />
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`
