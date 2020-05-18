import React from "react";

import "../styles/skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <div className="row row-header justify-content-center">
                    <h1 className="skill-title">Skills</h1>
            </div>
            <div className="skill-set">

                {/* First row */}
                <div className="row justify-content-around">

                    <div className="col-12 col-sm-4 col-md-3">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                                C++
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-md-3">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                                Python
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-md-3">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                                JavaScript
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Second Row */}
                <div className="row justify-content-around mt-5">

                    <div className="col-12 col-sm-4 col-md-3">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                                ReactJs
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-md-3">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                                Django
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-md-3">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                                Unity3D
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>     
        </section>
    )
}

export default Skills;