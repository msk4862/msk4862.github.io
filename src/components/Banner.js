import React, { useEffect } from "react";
import { TimelineMax, Bounce, Elastic } from "gsap";
// import "../utilities/PageScroller/jquery.onepage-scroll.min.js"
// import "../utilities/PageScroller/onepage-scroll.css"

import "../styles/banner.css";

const Banner = () => {
    useEffect(() => {
        var tl = new TimelineMax({});

        tl.from(".banner-text1", 1.5, {
            y: -500,
            ease: Bounce.easeOut,
        });
        tl.from(
            ".banner-text2",
            1.5,
            {
                y: -500,
                ease: Bounce.easeOut,
            },
            "+=0.01"
        );

        tl.from(".banner-btn", 1.5, {
            x: -1000,
            ease: Elastic.easeOut,
        });
    }, []);

    useEffect(() => {
        window.addEventListener("load", () => {
            document.querySelector("body").classList.add("loaded");
        });
    }, []);

    return (
        <div className="banner">
            <div className="bg-overlay"></div>
            <div className="bg-content">
                <div className="row justify-content-center align-items-center">
                    <div className="col">
                        <p className="banner-text1 mb-0">
                            Hello, I'm <span>Shoaib Asgar</span>
                        </p>
                        <p className="banner-text2">
                            I'm a full-stack web developer.
                        </p>
                        <a herf="#intro" className="btn btn-gradient">
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
