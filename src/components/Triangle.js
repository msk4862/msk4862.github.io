import React from "react";

import "../styles/triangle.css"

const Triangle = ({type}) => {
    return (        
        <svg 
            className={`triangle triangle-${type}`} 
            viewBox="0 0 500 500" role="presentation" 
            preserveAspectRatio="none">
            {/* <defs>
                <filter id="dropshadow"  height="200">
                <feGaussianBlur in="SourceAlpha" stdDeviation="20"/> 
                <feOffset dx="0" dy="-10" result="offsetblur"/>
                <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/> 
                </feMerge>
                </filter>
            </defs> */}


            <path className="triangle-path" d="M0 0l253 500L500 0H0z"></path>
        </svg>
    )
}

export default Triangle;