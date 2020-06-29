import React from "react"
import { Link } from "gatsby"

import "../styles/banner.css"
import Triangle from "../components/Triangle"

const Banner = () => {
  return (
    <section className="container">
        <div className="banner">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-sm-6">
                    <p>Hello, I'm <span>Shoaib Asgar</span>.<br />
                    I'm a full-stack web developer.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-sm-10">
                    <Link to="#intro" className="btn btn-gradient">Know More</Link>   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
