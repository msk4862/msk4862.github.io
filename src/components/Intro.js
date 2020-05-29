import React from "react"

import "../styles/intro.css"
import About from "../components/About"
import IntroSocial from "../components/IntroSocial"

const Intro = () => {
  return (
    <section className="intro-section">
      <div className="container-fluid">
        <div className="row justify-content-between">
          <IntroSocial />
          <About />
        </div>
      </div>
    </section>
  )
}

export default Intro
