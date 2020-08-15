import React from "react";

import "../styles/intro.css";

import { Interests, Eductaion, AboutConsts } from "../utilities/Constants";

const About = () => {
    return (
        <div className="about col-12 col-lg-8">
            <h2 className="left-title">About</h2>
            <p className="quote">
                {AboutConsts.quote}
                <footer>- {AboutConsts.by}</footer>
                This quote somehow summarizes my work and motivation.
            </p>
            <p>
                Hi, I'm Shoaib Asgar, a Full Stack Developer{" "}
                <span role="img" aria-label="emoji">
                    &#x1F680;
                </span>
                from Delhi, India 🇮🇳, currently, I am a computer science
                postgrad student who loves programming and interested in solving
                real world problems using the technologies present out there.
                Beside's programming, I enjoy UI designing{" "}
                <i className="fas fa-paint-brush"></i>, photography{" "}
                <i className="fas fa-camera-retro pr-2"></i> and eating food
                <span role="img" aria-label="emoji1">
                    &#x1F642;
                </span>
                .
            </p>

            <div className="row justify-content-start">
                {/* Interests */}
                <div className="col-12 col-sm-6">
                    <h3>Interests</h3>
                    <ul>
                        {Interests.map(interest => {
                            return <li key={interest}>{interest}</li>;
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
                                    <p className="mb-0">{edu.title}</p>
                                    <small className="ed-meta">
                                        {edu.name}
                                    </small>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default About;
