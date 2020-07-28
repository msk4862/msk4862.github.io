import React from "react";

import "../styles/experiences.css";
import Triangle from "../components/Triangle";
import { Games } from "../utilities/Constants";

const Experiences = () => {
    return (
        <>
            <section className="dark-bg experience" id="experience">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        {/* Left blank coloumn */}
                        <div className="col-12 col-sm-12 col-md-4">
                            <h2 className="left-title">Experience</h2>
                        </div>

                        {/* Right experience cards */}
                        <div className="col-12 col-sm-12 col-md-8 align-self-end">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-text">
                                        <h5>Full Stack Developer</h5>
                                        <p className="mb-0">Oneworldlearners</p>
                                        <small>
                                            <span>Feb 2020 – July 2020</span>
                                            <span className="dot-devider"></span>
                                            <span>Delhi</span>
                                        </small>
                                        <ul className="mt-3">
                                            <li>
                                                Responsible for server-side web
                                                application logic, cron jobs,
                                                APIs design, unit-testing and
                                                debugging.
                                            </li>
                                            <li>
                                                Integrated payement gateway for
                                                payment management.
                                            </li>
                                            <li>
                                                Designed and created UI/UX of
                                                the frontend.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /card */}

                        {/* card */}
                        <div className="col-12 col-sm-12 col-md-8 ml-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-text">
                                        <h5>Web Developer</h5>
                                        <p className="mb-0">
                                            RG SmartDiscovery LLP
                                        </p>
                                        <small>
                                            <span>Sep 2018 – May 2019</span>
                                            <span className="dot-devider"></span>
                                            <span>Delhi</span>
                                        </small>
                                        <ul className="mt-3">
                                            <li>
                                                Work with AWS, HTML5, CSS,
                                                JavaScript, PHP and everything
                                                in between.
                                            </li>
                                            <li>
                                                Develop ML Algorithms for
                                                various web applications in
                                                Python.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /card */}

                        {/* card */}
                        <div className="col-12 col-sm-12 col-md-8 ml-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-text">
                                        <h5>Game Developer</h5>
                                        <p className="mb-0">
                                            RG SmartDiscovery LLP
                                        </p>
                                        <small>
                                            <span>Jun 2017 – Feb 2019</span>
                                            <span className="dot-devider"></span>
                                            <span>Delhi</span>
                                        </small>
                                        <ul className="mt-3">
                                            <li>
                                                Design and develop
                                                Cross-platform mobile games with
                                                Unity3D, Android studio, etc.
                                            </li>
                                            <li>
                                                Currently Developed and
                                                published games on google play
                                                store : <br />
                                                <ol>
                                                    {Games.map(game => {
                                                        return (
                                                            <li key={game.name}>
                                                                {game.name}:{" "}
                                                                <a
                                                                    href={
                                                                        game.url
                                                                    }
                                                                    target="blank">
                                                                    See on
                                                                    PlayStore{" "}
                                                                    <i className="fa fa-external-link"></i>
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Card over */}
                        </div>
                        {/* /card */}
                    </div>
                </div>
            </section>
            <Triangle type="dark" />
        </>
    );
};

export default Experiences;
