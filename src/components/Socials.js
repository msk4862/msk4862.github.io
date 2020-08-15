import React from "react";

import { SocialLinks } from "../utilities/Constants";

const Socials = () => {

    return (
        <div className="row social-links justify-content-center">
            <a href={SocialLinks.linkedin} target="blank">
                <i className="zoom fab fa-linkedin"></i>
            </a>
            <a href={SocialLinks.github} target="blank">
                <i className="zoom fab fa-github"></i>
            </a>
            <a href={SocialLinks.twitter} target="blank">
                <i className="zoom fab fa-twitter"></i>
            </a>
            <a href={`mailto:${SocialLinks.instagram}`}>
                <i className="zoom fab fa-instagram"></i>
            </a>
            <a href={`mailto:${SocialLinks.email}`}>
                <i className="zoom fas fa-envelope"></i>
            </a>
        </div>
    );
};

export default Socials;
