import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import contactStyles from "../styles/contact.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <div className={contactStyles.container}>
        <div className={contactStyles.contactLink}>
          {" "}
          <a
            href="https://twitter.com/Ndumiso_29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="4x" icon={faTwitter} />
          </a>
        </div>
        <div className={contactStyles.contactLink}>
          {" "}
          <a
            href="https://github.com/nmguni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="4x" icon={faGithub} />
          </a>
        </div>
        <div className={contactStyles.contactLink}>
          {" "}
          <a
            href="https://twitter.com/Ndumiso_29"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon size="4x" icon={faGoogle} />
          </a>
        </div>
        <div className={contactStyles.contactLink}>
          {" "}
          <a
            href="https://www.linkedin.com/in/ndumiso-mguni-121b7b164/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="4x" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
