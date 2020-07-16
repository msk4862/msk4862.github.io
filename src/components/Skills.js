import React from "react";

import "../styles/skills.css";
import Triangle from "../components/Triangle";
import { SkillsList } from "../utilities/Constants";

const Skills = () => {
    return (
        <>
            <section id="skills" className="light-bg">
                <div className="conatiner-fluid">
                    <div className="row justify-content-center">
                        <div className="col-*">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div className="row justify-content-around mt-2">
                        {SkillsList.map(skill => {
                            return (
                                <div
                                    key={skill.name}
                                    className="skill col-12 col-lg-3">
                                    <h5>{skill.name}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{
                                                width: `${skill.expertise}`,
                                            }}>
                                            <small>{skill.expertise}</small>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Triangle type="light" />
        </>
    );
};

export default Skills;
