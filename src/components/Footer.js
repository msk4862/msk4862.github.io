import React from "react"

import "../styles/footer.css"

import Socials from "../components/Socials";

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center">
          <h4>Designed and developed by Shoaib Asgar</h4>
      </div>
      <Socials />
    </footer>
  )
}

export default Footer
