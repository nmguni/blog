import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import './header.module.scss'
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <header className={headerStyles.header}>
        <div>
          <h1>
            <Link className={headerStyles.title} to="/">
              <span> </span> {data.site.siteMetadata.title}
            </Link>
          </h1>
        </div>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                Contact
              </Link>
            </li>
            {/* <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                Article
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
