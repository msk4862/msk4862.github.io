import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import icon from "../images/favicon.ico";

const getSiteMetaData = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(getSiteMetaData);

  const scrollToTopBtn = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * When scrolled more than 10% of screen height
   */
  const handleScroll = () => {
    const rootElement = document.documentElement;

    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (scrollToTopBtn && rootElement.scrollTop / scrollTotal > 0.2) {
      scrollToTopBtn.current.classList.add("show-btn");
    } else {
      scrollToTopBtn.current.classList.remove("show-btn");
    }
  };

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link rel="icon" href={icon} />
        <meta name="description" content={description} />
      </Helmet>
      <button ref={scrollToTopBtn} className="scroll-top" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </button>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
