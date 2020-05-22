import React from "react"

import "../styles/footer.css"

import { SocialLinks } from "../utilities/Constants"

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center">
          <h4>Designed and developed by Shoaib Asgar</h4>
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
    </footer>
  )
}

export default Footer
