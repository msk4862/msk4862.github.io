import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import "../styles/header.css";
import Icon from "../images/profile/profile_sm.png";
import { Navs } from "../utilities/Constants";

const getAuthor = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const Header = () => {
    // object destrcturing
    const {
        site: {
            siteMetadata: { title },
        },
    } = useStaticQuery(getAuthor);

    return (
        <nav className="navbar navbar-dark navbar-expand-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="rounded-circle" src={Icon} alt={title} />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#Navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="Navbar">
                    <ul className="navbar-nav ml-auto">
                        {Navs.map(nav => {
                            return (
                                <li key={nav.name} className="nav-item">
                                    <a href={nav.href}>{nav.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
