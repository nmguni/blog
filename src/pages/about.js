import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum numquam
        maxime facilis, atque inventore ea repellendus fuga architecto,
        temporibus officia quis illum fugit excepturi libero, veritatis veniam
        hic laboriosam quidem consequatur dolorem cupiditate autem ad. Accusamus
        illo adipisci ex placeat commodi, praesentium nulla molestiae ipsum
        explicabo nostrum deleniti voluptate recusandae.
      </p>
      <p>
        want to reach out? <Link to="/contact">contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
