import React from "react"

import "../styles/intro.css"
import IntroSocial from "../components/IntroSocial"


const Intro = () => {

    return (
        <section className="intro-section">
            <div className="container">

                <div className="row justify-content-between">
                    
                    {/* About section */}
                    <div className="col-12 col-sm-12 col-md-8"> 
                        <div className="row ml-auto">
                            <h1 className="in-head">About</h1>
                        </div>
                        <p><i>“People enjoy the interaction on the Internet, and the feeling of 
                        belonging to a group that does something interesting: that’s how
                        some software projects are born.”</i> - Linus Torvalds</p>

                        <p>This quote somehow summarizes my work and motivation.</p><br/>
                        <p>Hi, I am a computer science postgrad student.

                        I love programming and interested in solving real world problems using the technologies present
                            out there.
                        </p>
                        
                        <div className="row justify-content-start">
                            {/* Interests */}
                            <div className="col-sm-6">
                                <h3>Interests</h3>
                                <ul>
                                    <li>
                                        Web Development
                                    </li>
                                    <li>
                                        Game Development
                                    </li>
                                    <li>
                                        Augmented Reality
                                    </li>
                                    <li>
                                        Deep Learning
                                    </li>
                                </ul>
                            </div>

                            {/* Education */}
                            <div className="col-sm-6">
                                    <h3>Eductaion</h3>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <i className="fa fa-graduation-cap"></i>
                                        </div>
                                        <div  className="col-sm-10">
                                            <span>MCA, 2019-2022</span> <br/>
                                            <span className="ed-meta">Department of Computer Science, Delhi University</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-1">
                                            <i className="fa fa-graduation-cap"></i>
                                        </div>
                                        <div  className="col-sm-10">
                                            <span>B.Sc.(H) Computer Science, 2016-2019</span> <br/>
                                            <span className="ed-meta">Hansraj College, Delhi University</span>
                                        </div>
                                    </div>

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
