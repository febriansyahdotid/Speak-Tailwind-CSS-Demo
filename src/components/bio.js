/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"

import Image from "gatsby-image"
import React from "react"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/logo-sekaidotid-fav.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div className="flex mb-5 border shadow-lg">
      <Image
        className="mr-5 rounded-full"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          minWidth: 100,
        }}
      />
      <p className="text-lg text-sekai">
        Ditulis Oleh <strong>{author}</strong> <br />
        {` `}
        <a href={`https://twitter.com/sekaidotid`}>Twitter &nbsp;</a>
        <a href={`https://facebook.com/sekaidotid`}>Facebook &nbsp;</a>
        <a href={`https://instagram.com/sekaidotid`}>Instagram &nbsp;</a>
        <a href={`https://t.me/sekaidotid_grup`}>Telegram &nbsp;</a>
        <a href={`https://gitlab.com/sekaidotid/website`}>GitLab &nbsp;</a>
        <br />
        Surat Elektronik : sekaidotid(at)outlook.com &nbsp;
      </p>
    </div>
  )
}

export default Bio
