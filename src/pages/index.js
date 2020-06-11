import React, { useEffect, useState } from "react"

import "../styles/base.css"

import Layout from "../components/Layout"
import Loader from "../components/Loader"
import Intro from "../components/Intro"
import Skills from "../components/Skills"
import Experiences from "../components/Experiences"
import Projects from "../components/Projects"

export default () => {

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
      setisLoading(false);
    }, 5500);
  }, [])

  function renderLayout() {
    return (
      <Layout>
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
        <Loader />
      </div>
    )
  }

  return (
    <>
      {isLoading ? renderLoader(): renderLayout()}
    </>
  )
}
