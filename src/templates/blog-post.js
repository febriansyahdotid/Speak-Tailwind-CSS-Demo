import React from "react"
import { Link, graphql } from "gatsby"
import AdSense from "react-adsense"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1 className="text-4xl text-sekai mt-8 mb-0">
            {post.frontmatter.title}
          </h1>
          <p className="text-lg leading-loose mb-8 ">{post.frontmatter.date}</p>
        </header>
        <Bio />
        <div className="border shadow-lg mt-4 mb-4">
          <AdSense.Google
            client="ca-pub-6599086733747900"
            slot="7220962165"
            style={{ display: "block" }}
            format="auto"
            responsive="true"
          />
        </div>

        <section
          className="blog-post border shadow-lg mt-8 mb-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="border shadow-lg mt-4 mb-4">
          <AdSense.Google
            client="ca-pub-6599086733747900"
            slot="7220962165"
            style={{ display: "block" }}
            format="auto"
            responsive="true"
          />
        </div>
        <footer>
          <Bio />
        </footer>
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
