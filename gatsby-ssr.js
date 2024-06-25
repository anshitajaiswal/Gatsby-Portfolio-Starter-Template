import React from "react";
import { onRenderBody as gatsbyOnRenderBody } from "gatsby";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
      key="google-fonts-preconnect"
    />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin="true"
      key="google-fonts-preconnect-crossorigin"
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Plaster&display=swap"
      rel="stylesheet"
      key="google-fonts-stylesheet"
    />,
  ]);
};
