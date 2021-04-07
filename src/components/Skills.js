import React from "react";

import "../styles/skills.css";
import Triangle from "../components/Triangle";
import { SkillsList } from "../utilities/Constants";

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills light-bg">
                <div className="conatiner-fluid">
                    <div className="row justify-content-center">
                        <div className="col-*">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        {/* {SkillsList.map(skill => {
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
                        })} */}

                        {SkillsList.map(item => {
                            return (
                                <div class="col-12 col-sm-4 text-center">
                                    <h1>
                                        <i className={item.icon}></i>
                                    </h1>
                                    <h4>{item.header}</h4>
                                    <div className="">
                                        {item.items.map(skill => {
                                            return <span>{skill}</span>;
                                        })}
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
