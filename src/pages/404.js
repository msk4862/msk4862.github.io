import React from "react";
import { Link } from "gatsby";

import "../styles/404.css";

const error = () => {
    return (
        <div className="page-404">
            <div className="text-404">404</div>
            <p>Sorry, but you are lost my friend.</p>
            <Link href="/">Go back to home</Link>
        </div>
    );
};

export default error;
