import React, { useState } from "react"

import "../styles/base.css"

import Layout from "../components/Layout"
import Loader from "../components/Loader"
import Intro from "../components/Intro"
import Skills from "../components/Skills"
import Experiences from "../components/Experiences"
import Projects from "../components/Projects"
import Banner from "../components/Banner"

export default () => {

  const [isLoading, setisLoading] = useState(true);

  function renderLayout() {
    return (
      <Layout>
        <Banner />
        <Intro />
        <Skills />
        <Experiences />
        <Projects />
      </Layout>
    )
  }

  function renderLoader() {
    return (
      <div className="svg-container">
        <Loader loading={(load)=>setisLoading(load)}/>
      </div>
    )
  }

  return (
    <>
      {isLoading ? renderLoader(): renderLayout()}
    </>
  )
}
