import React from "react"

import "../styles/intro.css"
import IntroSocial from "../components/IntroSocial"

import { Interests, Eductaion } from "../utilities/Constants"

const Intro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row justify-content-between">
          {/* About section */}
          <div className="col-12 col-sm-12 col-md-8">
            <h1 className="in-head">About</h1>

            <p>
              <i>
                “People enjoy the interaction on the Internet, and the feeling
                of belonging to a group that does something interesting: that’s
                how some software projects are born.”
              </i>{" "}
              - Linus Torvalds
            </p>

            <p>This quote somehow summarizes my work and motivation.</p>
            <br />
            <p>
              Hi, I am a computer science postgrad student. I love programming
              and interested in solving real world problems using the
              technologies present out there.
            </p>

            <div className="row justify-content-start">
              {/* Interests */}
              <div className="col-sm-6">
                <h3>Interests</h3>
                <ul>
                  {Interests.map(interest => {
                    return <li>{interest}</li>
                  })}
                </ul>
              </div>

              {/* Education */}
              <div className="col-sm-6">
                <h3>Eductaion</h3>

                {Eductaion.map(edu => {
                  return (
                    <div className="row">
                      <div className="col-sm-1">
                        <i className="fa fa-graduation-cap"></i>
                      </div>
                      <div className="col-sm-10">
                        <span>{edu.title}</span> <br />
                        <span className="ed-meta">{edu.name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <IntroSocial />
        </div>
      </div>
    </section>
  )
}

export default Intro
