import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import "../styles/projects.css";

import { Projects as ProjectsList } from "../utilities/Constants";

const getProjectThumbnails = graphql`
{
    allFile(filter: {relativeDirectory: {eq: "projects_thumbnails"}}) {
      nodes {
        relativePath,
        childImageSharp {
            fixed(width: 250, height: 250) {
                ...GatsbyImageSharpFixed_withWebp
            }
        }
      }
    }
}
  
`

const Projects = () => {

    const {
        allFile: {
            nodes
        }
    } = useStaticQuery(getProjectThumbnails);

    return (
        <section className="projects" id="projects">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-*">
                        <h1 className="in-head">Projects</h1>
                    </div>
                </div>
                <div className="projects-set row justify-content-between">
                    {ProjectsList.map(project => {

                        //finding correct image
                        const image = nodes.find((img) => 
                            img.relativePath.endsWith(project.image)
                        ).childImageSharp.fixed

                        return (
                            <div key={project.name} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card">
                                    <a href={project.href} >
                                            <Image 
                                                className="card-img align-self-center" 
                                                fixed={image} alt={project.name}/>
                                    </a>
                                    <div className="row card-body justify-content-center">
                                        <a className="col-12" href={project.href} >
                                            {project.name}
                                        </a>
                                        <p className="card-text col-12">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default Projects;

