import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import "./Jumbotron.css"
import Image from 'gatsby-image'

const getProfileImage = graphql`
{
    file(relativePath: {eq: "profile/profile.jpg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
}  
`

const Jumbotron = () => {

    const img = useStaticQuery(getProfileImage)
    console.log(img)
  
    return (
        <header className="intro-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-sm-12 col-md-8"> 
                        <div className="row ml-auto">
                            <h1 className="in-head">About</h1>
                        </div>
                        <p><i>“People enjoy the interaction on the Internet, and the feeling of 
                        belonging to a group that does something interesting: that’s how
                        some software projects are born.”</i> - Linus Torvalds</p><br/>

                        <p>This quote somehow summarizes my work and motivation.</p><br/>
                        <p>Hi, I am a computer science postgrad student.</p><br/>

                        <p>I love programming and interested in solving real world problems using the technologies present
                            out there.
                        </p>

                        <div className="row justify-content-start">
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

                        <div className="col-sm-6">
                                <h3>Eductaion</h3>
                                <div className="row">
                                    <div className="col-sm-1">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                    <div  className="col-sm-10">
                                        <span>MCA, 2019-2022</span> <br/>
                                        <span className="ed-meta">Department of Computer Science, Delhi University</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-1">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                    <div  className="col-sm-10">
                                        <span>B.Sc.(H) Computer Science, 2016-2019</span> <br/>
                                        <span className="ed-meta">Hansraj College, Delhi University</span>
                                    </div>
                                </div>
                            </div>

                            </div>
                        </div>

                    <div className="profile col-12 col-sm-12 col-md-3 ml-auto">
                        <div className="row profile-img ml-auto mr-auto">
                            <Image className="rounded-circle" fixed={img.file.childImageSharp.fixed}/>
                        </div>
                        <div className="row profile-title">
                            <h2>Shoaib Asgar</h2>
                        </div>
                        <div className="row" style={{fontSize:"0.75rem", textAlign: "center"}}>
                            <h4>MCA - Department of Computer Science<br/> Delhi University</h4>
                        </div>
                        <div className="row social-links justify-content-center">
                            <a href="https://www.linkedin.com/in/msk4862" target="blank">
                            <i className="zoom fab fa-linkedin fa-2x"></i></a>
                            <a href="https://github.com/msk4862" target="blank">
                            <i className="zoom fab fa-github fa-2x"></i></a>
                            <a href="https://www.facebook.com/md.shoaib.4862" target="blank">
                            <i className="zoom fab fa-facebook fa-2x"></i></a>
                            <a href="https://twitter.com/msk4862" target="blank">
                            <i className="zoom fab fa-twitter fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Jumbotron
