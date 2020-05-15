import React from "react";

import "../styles/skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <div className="row row-header justify-content-center">
                    <h1 className="skill-title">Skills</h1>
            </div>
            <div className="skill-set">
                <div className="row row-header justify-content-center">
                    <div className="col-12 col-sm-4 col-md-3 zoom">
                        <div className="skill-ico row">
                            <i className="fas fa-code fa-5x"></i>
                        </div>
                        <div className="skill-detail">
                            <p>C++<br/>90%</p>
                        </div>
                    </div> 
                    <div className="col-12 col-sm-4 col-md-3 zoom">
                        <div class="skill-ico row">
                            <i class="fab fa-python fa-5x"></i>
                        </div>
                        <div className="skill-detail">
                            <p>Python<br/>90%</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3 zoom">
                        <div className="skill-ico row">
                            <i className="fab fa-cuttlefish fa-5x"></i>
                        </div>
                        <div className="skill-detail">
                            <p>C<br/>80%</p>
                        </div>
                    </div>
                </div>
                <div className="row row-header justify-content-center">
                    <div className="col-12 col-sm-4 col-md-3 zoom">
                        <div className="skill-ico row">
                            <i className="fab fa-js fa-5x"></i>
                        </div>
                        <div className="skill-detail">
                            <p>JavaScript<br/>90%</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3 zoom">
                        <div className="skill-ico row">
                            <i className="fab fa-react fa-5x"></i>
                        </div>
                        <div className="skill-detail">
                            <p>ReactJs<br/>90%</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3 zoom">
                        <div className="skill-ico row">
                            <i className="fab fa-css3-alt fa-5x"></i>
                        </div>
                        <div className="skill-detail">
                            <p>CSS<br/>80%</p>
                        </div>
                    </div>
                </div>
            </div>        
        </section>
    )
}

export default Skills;