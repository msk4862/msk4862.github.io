import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import "../styles/projects.css";
import { Projects as ProjectsList } from "../utilities/Constants";

const getProjectThumbnails = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "projects_thumbnails" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  }
`;

const Projects = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(getProjectThumbnails);

  return (
    <section className="light-bg" id="projects">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-*">
            <h2>Projects</h2>
          </div>
        </div>
        <div className="projects-set row">
          {ProjectsList.map(project => {
            //finding correct image
            const image = nodes.find(img =>
              img.relativePath.endsWith(project.image)
            ).childImageSharp.fluid;

            return (
              <div
                key={project.name}
                className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card zoom">
                  <div className="card-img">
                    <a href={project.href}>
                      <Image className="" fluid={image} alt={project.name} />
                    </a>
                  </div>

                  <div className="row card-body justify-content-center">
                    <a className="col-12" href={project.href}>
                      <h5>{project.name}</h5>
                    </a>
                    <p className="card-text col-10 col-sm-12">
                      {project.description}
                    </p>
                    <div className="tech col">
                      {project.stack.map(tech => {
                        return <small key={tech}>{tech}</small>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
