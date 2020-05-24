import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Socials from "../components/Socials";

const getProfileImage = graphql`
  {
    file(relativePath: { eq: "profile/profile.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const IntroSocial = () => {
  const img = useStaticQuery(getProfileImage)
  
  return (
    <div className="col-12 col-lg-4 ml-auto order-lg-2">
      <div className="row profile-img ml-auto mr-auto">
        <Image
          className="rounded-circle"
          fixed={img.file.childImageSharp.fixed}
        />
      </div>
      <div className="row profile-title justify-content-center">
        <h2>Shoaib Asgar</h2>
      </div>
      <div className="row profile-designation justify-content-center">
        <h4 className="col-12 col-sm-8">
          MCA - Department of Computer Science
          Delhi University
        </h4>
      </div>
      <Socials />
    </div>
  )
}

export default IntroSocial
