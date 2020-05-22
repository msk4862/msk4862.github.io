import React from "react"

import "../styles/base.css"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Skills from "../components/Skills"
import Experiences from "../components/Experiences"
import Projects from "../components/Projects"

export default () => {
  return (
    <Layout>
      <Intro />
      <Skills />
      <Experiences />
      <Projects />
    </Layout>
  )
}
