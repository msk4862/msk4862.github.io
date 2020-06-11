import React from "react"

import "../styles/intro.css"
import About from "../components/About"
import IntroSocial from "../components/IntroSocial"
import Triangle from "../components/Triangle"

const Intro = () => {
  return (
    <>
      <section id="intro" className="dark-bg">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <IntroSocial />
            <About />
          </div>
        </div>
      </section>
      <Triangle type="dark"/>
     </>
  )
}

export default Intro
