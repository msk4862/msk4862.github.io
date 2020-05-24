import React from "react";

import { SocialLinks } from "../utilities/Constants";

const Socials = () => {
    return (
        <div className="row social-links justify-content-center">
            <a href={SocialLinks.linkedin} target="blank">
                <i className="zoom fa fa-linkedin-square fa-2x"></i>
            </a>
            <a href={SocialLinks.github} target="blank">
                <i className="zoom fa fa-github fa-2x"></i>
            </a>
            <a href={SocialLinks.twitter} target="blank">
                <i className="zoom fa fa-twitter-square fa-2x"></i>
            </a>
        </div>
    )
}

export default Socials;