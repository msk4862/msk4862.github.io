import React from "react";

import "../styles/triangle.css"

const Triangle = ({type}) => {
    return (        
        <svg class={`triangle triangle-${type}`} 
        viewBox="0 0 500 500" role="presentation" 
        preserveAspectRatio="none">
            <path class="triangle-path" d="M0 0l253 500L500 0H0z"></path>
        </svg>
    )
}

export default Triangle;