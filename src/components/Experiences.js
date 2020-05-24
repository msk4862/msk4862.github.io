import React from "react"

import "../styles/experiences.css"

import { Games } from "../utilities/Constants"

const Experiences = () => {
  return (
    <section className="experience" id="experience">
      <div className="container-fluid">
        <div className="row justify-content-between">
          {/* Left blank coloumn */}
          <div className="col-12 col-sm-12 col-md-4">
            <h1 className="left-title">Experience</h1>
          </div>

          {/* Right experience cards */}
          <div className="col-12 col-sm-12 col-md-8 align-self-end">
            <div className="card">
              <div className="card-body">
                <div className="card-text">
                  <strong>Web Developer</strong>
                  <br />
                  <i>RG SmartDiscovery LLP</i>
                  <br />
                  <i>Sep 2018 – May 2019, Delhi</i>
                  <br />
                  <br />
                  <ul>
                    <li>
                      Work with AWS, HTML5, CSS, JavaScript, PHP and everything
                      in between.
                    </li>
                    <li>
                      Develop ML Algorithms for various web applications in
                      Python.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-8 ml-auto">
            <div className="card">
              <div className="card-body">
                <div className="card-text">
                  <strong>Game Developer</strong>
                  <br />
                  <i>Genie Fusion LLC</i>
                  <br />
                  <i>Jun 2017 – Feb 2019, Delhi</i>
                  <br />
                  <br />
                  <ul>
                    <li>
                      Design and develop Cross-platform mobile games with
                      Unity3D, Android studio, etc.
                    </li>
                    <li>
                      Currently Developed and published games on google play
                      store : <br />
                      <ol>
                        {Games.map(game => {
                          return (
                            <li key={game.name}>
                              {game.name}:{" "}
                              <a href={game.url} target="blank">
                                See on PlayStore{" "}
                                <i className="fa fa-external-link"></i>
                              </a>
                            </li>
                          )
                        })}
                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card over */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
