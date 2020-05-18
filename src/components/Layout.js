import React from "react"
import { graphql, useStaticQuery,  } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from "./Header"

const getSiteMetaData = graphql`
  {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`

const Layout = ({ children }) => {

  const {
    site: {
      siteMetadata: {
        title,
        description
      },
    },
  } = useStaticQuery(getSiteMetaData)


  return (
    <>
      <Helmet>
        <html lang='en'/>
        <title>{title}</title>
        <meta name='description' content={description}/>
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
