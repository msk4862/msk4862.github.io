import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import Socials from "../components/Socials";

const getProfileImage = graphql`
    {
        file(relativePath: { eq: "profile/profile.jpg" }) {
            childImageSharp {
                fixed(quality: 100) {
                    ...GatsbyImageSharpFixed_withWebp
                }
            }
        }
    }
`;

const IntroSocial = () => {
    const img = useStaticQuery(getProfileImage);

    return (
        <div className="profile col-12 col-lg-4 ml-auto order-lg-2">
            <div className="row profile-img ml-auto mr-auto">
                <Image
                    className="rounded-circle"
                    fixed={img.file.childImageSharp.fixed}
                />
            </div>
            <div className="row profile-title justify-content-center">
                <h3>Shoaib Asgar</h3>
            </div>
            <div className="row profile-designation justify-content-center">
                <h5 className="col-8 col-sm-8">
                    MCA - Department of Computer Science Delhi University
                </h5>
            </div>
            <Socials />
        </div>
    );
};

export default IntroSocial;
