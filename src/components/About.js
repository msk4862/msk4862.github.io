import React from "react"

import "../styles/intro.css"

import { Interests, Eductaion } from "../utilities/Constants"

const About = () => {
  return (
    <div className="col-12 col-lg-8">
      <h2 className="left-title">About</h2>

      <p>
        <i>
          “People enjoy the interaction on the Internet, and the feeling of
          belonging to a group that does something interesting: that’s how some
          software projects are born.”
        </i>{" "}
        - Linus Torvalds
      </p>

      <p>This quote somehow summarizes my work and motivation.</p>
      <br />
      <p>
        Hi, I am a computer science postgrad student. I love programming and
        interested in solving real world problems using the technologies present
        out there.
      </p>

      <div className="row justify-content-start">
        {/* Interests */}
        <div className="col-12 col-sm-6">
          <h3>Interests</h3>
          <ul>
            {Interests.map(interest => {
              return <li key={interest}>{interest}</li>
            })}
          </ul>
        </div>

        {/* Education */}
        <div className="col-12 col-sm-6">
          <h3>Eductaion</h3>
          {Eductaion.map(edu => {
            return (
              <div key={edu.title} className="row">
                <div className="col-1">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <div className="col-10">
                  <span>{edu.title}</span> <br />
                  <span className="ed-meta">{edu.name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
