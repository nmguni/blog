import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import footerstyles from './footer.module.scss'


const Footer = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }
  }
  `)
  return (
    <footer className={footerstyles.footer} >
      <p>Created by {data.site.siteMetadata.author} &#64; 2020 </p>
    </footer>
  )
}

export default Footer
