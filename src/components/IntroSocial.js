import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { SocialLinks } from "../utilities/Constants"

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
    <div className="profile col-12 col-sm-12 col-md-3 ml-auto">
      <div className="row profile-img ml-auto mr-auto">
        <Image
          className="rounded-circle"
          fixed={img.file.childImageSharp.fixed}
        />
      </div>
      <div className="row profile-title">
        <h2>Shoaib Asgar</h2>
      </div>
      <div className="row" style={{ fontSize: "0.75rem", textAlign: "center" }}>
        <h4>
          MCA - Department of Computer Science
          <br /> Delhi University
        </h4>
      </div>

      {/* Socials */}
      <div className="row social-links justify-content-center">
        <a href={SocialLinks.linkedin} target="blank">
          <i className="zoom fa fa-linkedin-square fa-2x"></i>
        </a>
        <a href={SocialLinks.github} target="blank">
          <i className="zoom fa fa-github fa-2x"></i>
        </a>
        <a href={SocialLinks.twitter} target="blank">
          <i className="zoom fa fa-twitter-square fa-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default IntroSocial
