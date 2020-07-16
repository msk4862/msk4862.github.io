import React from "react";

import "../styles/triangle.css";

const Triangle = ({ type }) => {
    return (
        <svg
            className={`triangle triangle-${type}`}
            viewBox="0 0 500 550"
            role="presentation"
            preserveAspectRatio="none">
            {/* <defs>
                <filter id="dropshadow"  height="200">
                <feGaussianBlur in="SourceAlpha" stdDeviation="50"/> 
                <feOffset dx="0" dy="50" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                </feComponentTransfer>

                <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/> 
                </feMerge>
                </filter>
            </defs> */}

            <path className="triangle-path" d="M0 0l253 500L500 0H0z"></path>
        </svg>
    );
};

export default Triangle;
