import React from "react"

import "../styles/skills.css"

import { SkillsList } from "../utilities/Constants"

const Skills = () => {

  return (
  
    <section id="skills">
      <div className="conatiner-fluid">
          <div className="row justify-content-center">
                    <div className="col-*">
                        <h1>Skills</h1>
                    </div>
          </div>
          <div className="row justify-content-around mt-2">
            {SkillsList.map(skill => {
              return (
                <div key={skill.name} className="skill col-12 col-lg-3">
                  <h5>{skill.name}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${skill.expertise}`}}
                    >
                    <span>{skill.expertise}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
  )
}

export default Skills
