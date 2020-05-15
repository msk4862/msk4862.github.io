import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "../styles/header.css"

const getAuthor = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Header = () => {
  // object destrcturing
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getAuthor)

  return (
    <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h3>{title}</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#Navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="Navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skiils
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
