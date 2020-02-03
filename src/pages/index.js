import React from "react"
import { Link } from "gatsby"


import Head from '../components/head'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <h1>Hello.</h1>
      <h2>
        I'm Ndumiso a FRONT END DEV  from Canada{" "}
      </h2>
      <p>
        need a dev? <Link to="/contact">Contct me,</Link>{" "}
      </p>

    </Layout>
  )
}


export default IndexPage
