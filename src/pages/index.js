import React from "react"
import img from "../images/undraw_web_developer_p3e5.svg"
import headStyles from "../styles/contact.module.scss"
import Head from "../components/head"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={headStyles.wrapper}>
        <h1>Hello.</h1>
        <h4>Welcome to my Blog!</h4>
        <div className={headStyles.content}>
          {" "}
          <p>
            I started this blog to cover technologies and topics that I'm
            unfamiliar with or have trouble understanding. Writing about such
            topics will help me and others who are reading this gain better
            knowledge on the topics at hand. <br /> <br />
            My Goal is to become a proficient full stack developer but at the
            moment my strengths are in the front end. With consistancy and
            patients and lots of practise I know I will reach my goals.
          </p>
          <img alt="writing a blog on a laptop" src={img}></img>{" "}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
