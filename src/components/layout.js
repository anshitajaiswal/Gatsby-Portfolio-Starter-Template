/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import { useState } from "react";
// ... other imports for Background and SliderButton


const Layout = ({ children, aboutRef, projectRef , contactRef, theme, toggleTheme}) => {


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header style={{zIndex:40}} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} theme={theme} toggleTheme={toggleTheme} siteTitle={data.site.siteMetadata?.title || `Title`}  />
      <div 
        style={{
          
          marginTop:"80px"
        }}
      >
        <main >{children}</main>
      </div>
      
    </>
  );
};

export default Layout;
