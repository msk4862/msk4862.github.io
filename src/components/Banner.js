import React, { useEffect } from "react";
import { TimelineMax, Bounce } from "gsap";
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
    }, []);

    useEffect(() => {
        document.getElementById("banner").addEventListener("scroll", () => {
            console.log("event");
        });
    }, []);

    function scroll() {
        console.log("asas asjkas");
        // document.querySelector("#banner").scrollTo(window.screenY);
        // document.querySelector("#banner").scrollHeight = screen.height;
    }

    return (
        <div
            id="banner"
            className="banner"
            onLoad={() => console.log("enter")}
            onWheel={() => scroll()}>
            <div className="bg-overlay"></div>
            <div className="bg-content">
                <div className="row justify-content-center align-items-center">
                    <div className="col">
                        <h3 className="banner-text1 mb-0">
                            Hello, I'm <span>Shoaib Asgar</span>
                        </h3>
                        <h3 className="banner-text2">
                            I'm a full-stack web developer.
                        </h3>
                        <a href="#intro" className="btn btn-gradient">
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
