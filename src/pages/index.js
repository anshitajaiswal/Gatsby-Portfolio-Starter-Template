import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Stars from "../components/stars";
import ContactPage from "./contact";
import ProjectPage from "./projects";
import AboutPage from "./About";
import Footer from "../components/footer";
import { Cloud2, Clouds2 } from "../components/Cloud2";

const color = {
  blue4: "#19191C",
  black: "#020408",
  white: "#ffffff",
  gray: "#474F5A",
  blue1: "#6EBDE7",
};


const Heading = styled.h1`
  font-family: "Plaster", sans-serif;
  font-size: 159px;
  margin-top: 320px;
  text-align: center;
  z-index: 20; 
  position: relative; 

  @media (max-width: 768px) {
    margin-top: 48vw;
    margin-left: 30%;
    font-size: 12vw;
  }

  @media (max-width: 600px) {
    margin-top: 65vw;
    margin-left: 30%;
    font-size: 11vw;
  }
`;

const BlueA = styled.span`
  color: ${(props) => props.color.blue1};
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  width: 100%;
  height: 4100px;
  position: absolute;
  top: 100vh;
  left: 0;
  transition: top 0.5s ease-in;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 20;
  padding-top: 60px;
  bottom: 0px;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const Section = styled.section`
  padding: 30px 15px;
  min-height: 70vh;
`;

const bounce = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const Arrow = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 30px solid #999;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
`;

const IndexPage = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  
  const [theme, setTheme] = useState("dark"); // Initial theme state

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("Theme updated to:", theme);
  };

  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#19191C" : "rgb(252,252,252)");
    setBackgroundColorMain(theme === "dark" ? "#020408" : "#EBEEEE");
  }, [theme]);

  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#19191C" : "rgb(252,252,252)");
  const [backgroundColorMain, setBackgroundColorMain] = useState(theme === "dark" ? "#020408" : "#EBEEEE");

  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Layout aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} theme={theme} toggleTheme={toggleTheme}>
      <MainContainer  style={{ backgroundColor: backgroundColorMain }}>
        <Stars theme={theme} toggleTheme={toggleTheme} />

        
          <p    style={{ marginRight: "40px", marginLeft: "900px", textAlign: "right", color: "#999", marginTop: "150px" }}>
            Write a small introductory paragraph about yourself or you can add a quote here. You can also make this be at center instead.
          </p>
          <Cloud2 theme={theme} toggleTheme={toggleTheme} />
          <Clouds2 theme={theme} toggleTheme={toggleTheme} />

          <Heading>
            <BlueA color={color}>ANSHITA</BlueA>
          </Heading>
          <Arrow onClick={handleScrollToAbout} />
        
      </MainContainer>
      </Layout>
      <Layout aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} theme={theme} toggleTheme={toggleTheme}>
        <AboutContainer id="about-section" ref={aboutRef} style={{ backgroundColor: backgroundColor }}>
          <ContentContainer>
            <Section light>
              <AboutPage theme={theme} toggleTheme={toggleTheme} />
            </Section>
           
            <Section light ref={projectRef} >
              <ProjectPage theme={theme} toggleTheme={toggleTheme} />
              
            </Section>

            <Section light ref={contactRef}>
              <ContactPage theme={theme} toggleTheme={toggleTheme} />
            </Section>

            <FooterContainer>
              <Footer theme={theme} toggleTheme={toggleTheme} />
            </FooterContainer>
          </ContentContainer>
        </AboutContainer>
      </Layout>
    </>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
