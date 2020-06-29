import React, { useEffect } from "react"
import { TimelineMax, Bounce, Elastic } from "gsap"

import "../styles/banner.css"
import banner from "../images/banner.jpg"

const Banner = () => {

    useEffect(()=> {
        var tl =new TimelineMax({})
        
        tl.from(".banner-text1", 1.5, {
            y: -500,
            ease: Bounce.easeOut,
        })
        tl.from(".banner-text2", 1.5, {
            y: -500,
            ease: Bounce.easeOut,
        }, "+=0.01")

        tl.from(".banner-btn", 1.5, {
            x: -1000,
            ease: Elastic.easeOut,
        })
    }, [])

  return (
    <div className="banner">
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-sm-6">
                    <p className="banner-text1 mb-0">Hello, I'm <span>Shoaib Asgar</span></p>
                    <p className="banner-text2">I'm a full-stack web developer.</p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="banner-btn">
                    <a herf="#intro" className="btn btn-gradient">Know More</a>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
