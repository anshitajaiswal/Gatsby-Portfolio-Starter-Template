import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import styled from "styled-components";
import MoonImage from "../images/moon.png";
import EarthImage from "../images/earth.png";
import Background from "../components/projectBackground";
import customCursor from "../images/custom-cursor.svg";

const Line = styled.div`
  height: 1638px; /* Full viewport height */
  width: 0.5px;
  background: #888;
  margin-top: 10px;
`;

const Scroller = styled.div`
  transform: translateY(${props => props.scrollPosition-1640}px);
  transition: transform 0.3s ease-out;
`;

const Scroller2 = styled.div`
  transform: translateY(${props => props.scrollPosition2-2440}px);
  transition: transform 0.3s ease-out;
`;

const Scroller3 = styled.div`
  transform: translateY(${props => props.scrollPosition3-2840}px);
  transition: transform 0.3s ease-out;
`;

const Circle1 = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
 
  margin-left: -20px;
`;

const Circle2 = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;

 
  
`;

const Circle3 = styled.div`
  border-radius: 50%;
  height: 5px;
  width: 5px;
  background-color: #fff;
  border: 0.8px solid #333;
  
`;

const Container = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  padding: 0px;
  margin-left: 140px;
  color: #909090;
`;

const Project = styled.div`
  height: 380px;
  width: 400px;

  border-radius: 10px;
  margin-right: 40px;
  margin-bottom: 40px;
  
  box-shadow: 0px 0px 30px 0px #000;

  &:hover {
    cursor: url(${customCursor}), auto;
    box-shadow: 0px 0px 20px 0px rgba(0, 119, 182, 0.5);
  }
`;

const ProjectContent = styled.div`
  margin-left: 20px;
  margin-top: -400px;
  width: 360px;
`;

const ArrowContainer = styled.div`
  height: 380px;
  width: 400px;
  
  border-radius: 10px;
  margin-right: 40px;
  margin-bottom: 40px;

  &:hover {
    cursor: url(${customCursor}), auto;
    box-shadow: 0px 0px 40px 0px rgba(0, 119, 182, 0.5);
  }
`;

const LinkContainer = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Text = styled.div`
  color: "#888";
`;

const ProjectContainer = styled.div`
  padding: 0px;
  z-index:12;
  
`;

const ProjectPage = ({ theme, toggleTheme }) => {
  const [scrollPosition, setScrollPosition] = useState("1000px");
  const [scrollPosition2, setScrollPosition2] = useState("1000px");
  const [scrollPosition3, setScrollPosition3] = useState("1000px");

  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#19191c" : "rgb(252,252,252)");
    setBackgroundColor2(theme === "dark" ? "rgba(255,255,255,0.18)" : "#888");
    setBorder(theme === "dark" ? "#333" : "rgb(240,240,240)");
    console.log(theme);
  }, [theme]);
  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#19191c" : "rgb(252,252,252)");
  const [backgroundColor2, setBackgroundColor2] = useState(theme === "dark" ? "rgba(255,255,255,0.18)" : "#888");
  const [Border, setBorder] = useState(theme === "dark" ? "#333" : "rgb(240,240,240)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollTop2 = window.scrollY;
      const scrollTop3 = window.scrollY;
      // Calculate top and bottom boundaries based on Line and Scroller dimensions
      const maxScrollTop = 1640; // Adjust this based on top offset
      const maxScrollBottom = 2410; // Adjust this based on Line height minus Scroller height
      const maxScrollTop2 = 2460;
      const maxScrollBottom2 = 2800;
      const maxScrollTop3 = 2850;
      const maxScrollBottom3 = 3200;

      // Limit scrollPosition within boundaries
      if (scrollTop >= maxScrollTop && scrollTop <= maxScrollBottom) {
        setScrollPosition(scrollTop);
      } else if (scrollTop < maxScrollTop) {
        setScrollPosition(maxScrollTop);
      } else {
        setScrollPosition(maxScrollBottom);
      }

      if (scrollTop2 >= maxScrollTop2 && scrollTop2 <= maxScrollBottom2) {
        setScrollPosition2(scrollTop2);
      } else if (scrollTop2 < maxScrollTop2) {
        setScrollPosition2(maxScrollTop2);
      } else {
        setScrollPosition2(maxScrollBottom2);
      }

      if (scrollTop3 >= maxScrollTop3 && scrollTop3 <= maxScrollBottom3) {
        setScrollPosition3(scrollTop3);
      } else if (scrollTop3 < maxScrollTop3) {
        setScrollPosition3(maxScrollTop3);
      } else {
        setScrollPosition3(maxScrollBottom3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <>

      <h1 style={{ marginLeft: "45px", fontSize: "40px", marginTop: "90px", color:"#6EBDE7" }}>Projects</h1>
      <p style={{ marginLeft: "45px",color:"#888"}}>Add your or your company's projects here.</p>
      <Container style={{ marginTop: "90px", marginLeft: "120px" }}>
        <Line />
        <Container>
        <Scroller scrollPosition={scrollPosition}>
          <Circle1 style={{backgroundColor: backgroundColor}}/> 
          <Circle2 style={{marginLeft: "-10px", marginTop:"-30px", border:`2px solid ${backgroundColor2}`}} />
          <Circle3 style={{marginTop: "-13px",marginLeft: "-2.4px"}} />
          <h1 style={{marginLeft:"24px", marginTop:"-16px", color:"#6EBDE7"}} >2024</h1>
        </Scroller>

        <Scroller2 style={{marginLeft: "-78px"}} scrollPosition2={scrollPosition2}>
          <Circle1 style={{marginTop:"820px", backgroundColor: backgroundColor}} /> 
          <Circle2 style={{marginLeft: "-10px", marginTop:"-30px", border:`2px solid ${backgroundColor2}`}} />
          <Circle3 style={{marginTop: "-13px",marginLeft: "-2.4px"}}/>
          <h1 style={{marginLeft:"24px", marginTop:"-16px", color:"#6EBDE7"}} >2023</h1>
        </Scroller2>


        <Scroller3 style={{marginLeft: "-78px"}} scrollPosition3={scrollPosition3}>
          <Circle1 style={{marginTop:"1250px", backgroundColor: backgroundColor}} /> 
          <Circle2 style={{marginLeft: "-10px", marginTop:"-30px", border:`2px solid ${backgroundColor2}`}} />
          <Circle3 style={{marginTop: "-13px",marginLeft: "-2.4px"}}/>
          <h1 style={{marginLeft:"24px", marginTop:"-16px", color:"#6EBDE7"}} >2022</h1>
        </Scroller3>
        
        </Container>
        <ContentContainer>
          <div id="2024">
            <Container>
              <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
                <ProjectContent>
                  <h1>Project Moon</h1>
                  <p>The Moon is Earth's only natural satellite. It orbits at an average distance of 384,400 km (238,900 mi), about 30 times the diameter of Earth.</p>
                  
                  <LinkContainer />
                  <Text style={{ marginTop: "-35px", marginLeft: "35px" }}>
                    <a href="https://en.wikipedia.org/wiki/Moon">Link</a>
                  </Text>
                  <img src={MoonImage} alt="Moon" style={{ width: "300px", height: "auto", marginTop:"26px", marginLeft:"30px" }} />
                  <ArrowContainer style={{marginTop:"-409px", marginLeft:"-20px", zIndex:13}}/>
                </ProjectContent>
              </ProjectContainer>
              <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
                <ProjectContent>
                  <h1>Project Earth</h1>
                  <p>Earth is the third planet from the Sun and the only astronomical object known to harbor life. </p>
                  
                  <LinkContainer />
                  <Text style={{ marginTop: "-35px", marginLeft: "35px" }}>
                    <a href="https://en.wikipedia.org/wiki/Earth">Link</a>
                  </Text>
                  <img src={EarthImage} alt="Earth" style={{ width: "300px", height: "auto", marginTop:"62px", marginLeft:"30px" }} />
                  <ArrowContainer style={{marginTop:"-409px", marginLeft:"-20px", zIndex:13}}/>
                </ProjectContent>
              </ProjectContainer>
            </Container>
            <Container>
              <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
              </ProjectContainer>
              
            </Container>
          </div>
          <div id="2023">
            <Container>
              <Project style={{border:`1px solid ${Border}`}}/>
              <Project style={{border:`1px solid ${Border}`}}/>
            </Container>
            <Container>
              <Project style={{border:`1px solid ${Border}`}}/>
            </Container>
          </div>
        </ContentContainer>
      </Container>
    </>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectPage;
