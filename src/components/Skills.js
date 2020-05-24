import React from "react"

import "../styles/skills.css"

import { SkillsList } from "../utilities/Constants"

const Skills = () => {
  return (
    <section id="skills">
      <div className="row row-header justify-content-center">
        <h1 className="skill-title">Skills</h1>
      </div>
      <div className="skill-set">
        {/* First row */}
        <div className="row justify-content-around">
          {SkillsList.map(skill => {
            return (
              <div className="skill col-12 col-sm-4 col-md-3">
                <h5>{skill.name}</h5>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    aria-valuenow="40"
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
