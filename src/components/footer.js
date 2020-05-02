import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerstyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerstyles.footer}>
      <p> Copyright 2020 {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer
