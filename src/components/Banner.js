import React, { useEffect } from "react";
import { TimelineMax, Bounce } from "gsap";
import { SocialLinks } from "../utilities/Constants";
import "../styles/banner.css";

const Banner = () => {
    function show() {
        var button = document.getElementsByClassName("banner-content")[0];
        button.classList.remove("hidden");
    }

    useEffect(() => {
        var tl = new TimelineMax({ onStart: show });

        tl.from(".banner-text1", {
            duration: 1.5,
            y: -500,
            ease: Bounce.easeOut,
        });
        tl.from(
            ".banner-text2",
            {
                duration: 1.5,
                y: -500,
                ease: Bounce.easeOut,
            },
            "+=0.01"
        );
        tl.from(".know-more-btn", {
            // onStart: showButton,
            autoAlpha: 0,
            ease: "slow(0.25, 0.9, true)",
        });
    }, []);

    return (
        <div id="banner" className="banner">
            <div className="bg-overlay"></div>
            <div className="bg-content">
                <div className="row justify-content-center align-items-center banner-content hidden">
                    <div className="col-10 col-sm-12 p-0">
                        <h3 className="banner-text1 mb-0">
                            Hello, I'm{" "}
                            <a href={SocialLinks.github}>
                                <span>Shoaib Asgar</span>
                            </a>
                        </h3>
                        <h3 className="banner-text2 mt-2">
                            I'm a full-stack developer.
                        </h3>
                        <a
                            href="#intro"
                            className="btn btn-gradient know-more-btn mt-4">
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
