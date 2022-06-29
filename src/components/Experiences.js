import React from "react";

import "../styles/experiences.css";
import Triangle from "../components/Triangle";
import { Experience } from "../utilities/Constants";

const Experiences = () => {
  const {
    hackerrank,
    hackerrank_intern,
    oneworldlearners,
    game_dev,
  } = Experience;

  const oneworldlearners_points = oneworldlearners.split("#");
  const game_points = game_dev.split("#");
  const hackerrank_intern_points = hackerrank_intern.split("#");
  const hackerrank_points = hackerrank.split("#");

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
                    <h5>Software Development Engineer</h5>
                    <p className="mb-0">HackerRank</p>
                    <small>
                      <span>Jan 2022 – Present</span>
                      <span className="dot-devider"></span>
                      <span>WFH</span>
                    </small>
                    <ul className="mt-3">
                      {hackerrank_points.map((point, index) => {
                        return <li key={index}>{point}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /card */}

            <div className="col-12 col-sm-12 col-md-8 ml-auto">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <h5>Software Development Engineer Intern</h5>
                    <p className="mb-0">HackerRank</p>
                    <small>
                      <span>Jun 2021 – Dec 2021</span>
                      <span className="dot-devider"></span>
                      <span>WFH</span>
                    </small>
                    <ul className="mt-3">
                      {hackerrank_intern_points.map((point, index) => {
                        return <li key={index}>{point}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /card */}

            <div className="col-12 col-sm-12 col-md-8 ml-auto">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <h5>Full Stack Developer Intern</h5>
                    <p className="mb-0">Oneworldlearners</p>
                    <small>
                      <span>Feb 2020 – July 2020</span>
                      <span className="dot-devider"></span>
                      <span>Delhi</span>
                    </small>
                    <ul className="mt-3">
                      {oneworldlearners_points.map((point, index) => {
                        return <li key={index}>{point}</li>;
                      })}
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
                    <h5>Game Developer Intern</h5>
                    <p className="mb-0">RG SmartDiscovery LLP</p>
                    <small>
                      <span>Jun 2017 – Feb 2019</span>
                      <span className="dot-devider"></span>
                      <span>Delhi</span>
                    </small>
                    <ul className="mt-3">
                      {game_points.map((point, index) => {
                        return <li key={index}>{point}</li>;
                      })}
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
