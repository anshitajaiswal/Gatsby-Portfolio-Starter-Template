// gatsby-browser.js
import React from "react";

export const onClientEntry = () => {
  const linkGoogleFonts = document.createElement("link");
  linkGoogleFonts.rel = "preconnect";
  linkGoogleFonts.href = "https://fonts.googleapis.com";
  document.head.appendChild(linkGoogleFonts);

  const linkGoogleFontsCrossOrigin = document.createElement("link");
  linkGoogleFontsCrossOrigin.rel = "preconnect";
  linkGoogleFontsCrossOrigin.href = "https://fonts.gstatic.com";
  linkGoogleFontsCrossOrigin.crossOrigin = "anonymous";
  document.head.appendChild(linkGoogleFontsCrossOrigin);

  const linkFontStylesheet = document.createElement("link");
  linkFontStylesheet.rel = "stylesheet";
  linkFontStylesheet.href =
    "https://fonts.googleapis.com/css2?family=Plaster&display=swap";
  document.head.appendChild(linkFontStylesheet);
};
