import React, { useState, useEffect } from "react";
import Seo from "../components/seo"
import styled from "styled-components"
import pic3 from "../images/pic2.jpeg" 
import pic1 from "../images/pic1.jpeg"
import pic4 from "../images/pic4.jpeg"
import {Cloud, Clouds} from "../components/Cloud"
import HorizontalCarousel from "../components/carousel"

const Container = styled.div`
  display: flex;
  align-items: center; /* Center align the items vertically */
  margin-top: 30px;
  margin-left: 40px;
`;



const CloudContainer = styled.div`
  display: flex;
  align-items: center; /* Center align the items vertically */
  margin-top: 30px;
  margin-left: 5px;
`;
const ContentContainer = styled.div`
  padding:10px;
  color: #909090;
`;

const Heading = styled.div`
  font-size: 30px;
  h1 {
    margin: 0; /* Remove the default margin */
    margin-left: 25px;
  }
`;

const Timeline= styled.div`
  margin-left:240px;
  margin-top: 150px;
`;

const ProfileImage = styled.img`
  width: 250px; /* Adjust the size as needed */
  height: 250px; /* Adjust the size as needed */
  border-radius: 50%; /* Make the image circular */
  margin-left: 140px; /* Space between image and text */
`;

const Line = styled.div`
  height: 0.5px; /* Full viewport height */
  width: 700px;
  background: #888;
  margin-top: 10px;
`;

const Line2 = styled.div`
  height: 80px; /* Full viewport height */
  width: 0.5px;
  background: #888;
`;


const Circle2 = styled.div`
  border-radius: 50%;
  height: 12px;
  width: 12px;
  background-color: #888;
  
`;

const Circle1 = styled.div`
  border-radius: 50%;
  height: 8px;
  width: 8px;
  background-color: #fff;
  margin-top:-4px;
  border: 0.8px solid #333;
  
`;

const AboutPage = ({ theme, toggleTheme }) => {
  useEffect(() => {
    setTextColor(theme === "dark" ? "#888" : "#000");
   
  }, [theme]);
  const [textColor,setTextColor] = useState(theme === "dark" ? "#888" : "#000"); // Set color based on theme

    const images = [
        pic4, // Adjust paths based on your actual image locations
        pic1,
        pic3,pic1,pic4, pic3
        // Add more images as needed
      ];

  const gradientStyle = {
    background: 'linear-gradient(90deg, #0077b6, #00FFFF)',
    WebkitBackgroundClip: 'text', /* For Safari and Chrome */
    MozBackgroundClip: 'text', /* For Firefox (older versions) */
    backgroundClip: 'text', /* Standard property */
    WebkitTextFillColor: 'transparent', /* For Safari and Chrome */
    MozTextFillColor: 'transparent', /* For Firefox (older versions) */
    textFillColor: 'transparent',
    display: 'inline-block' // Ensure the text is properly displayed
  };

  return (
    <>
    <div>
      <Container>
        <ContentContainer>
        <CloudContainer>
            <Clouds/>
        <Heading style={{ zIndex: 4 }}>
          <h1>Hey there, I'm</h1>
          <h1 style={gradientStyle}>
            Anshita Jaiswal
          </h1>
        </Heading>
        <Cloud/>
        </CloudContainer>
        <p style={{ color: textColor }}>I'm passionate about creating innovative web products with a focus on good design. I enjoy learning new technologies and contributing to open source projects.</p>
        </ContentContainer>
       
        <ProfileImage src={pic3} alt="Profile" />
      </Container>
      </div>
      <div>
      <HorizontalCarousel images={images} />
      </div>
      <Container>
      <ContentContainer>
      <div>
        <h1 style={{fontSize:"40px", color:"#6EBDE7"}}>Education</h1>
        <p>You can add information about your experiences or education here in a timeline format easily.</p>
        </div>
        <Timeline>
        <Line/>
        <Circle2 style={{marginTop:"-6px"}}/>

        <Circle1 style={{marginLeft:"175px",marginTop:"-10px"}}/>
        <Line2 style={{marginLeft:"179px"}}/>
        <h1 style={{marginLeft:"152px", color:"#0077b6"}}>2019</h1>
        <p style={{textAlign: 'center', marginTop:"-232px", marginLeft:"-158px"}}>10th | 97.4% <br/>
        Delhi Public School | CBSE </p>

        <Circle1 style={{marginLeft:"350px", marginTop:"-2px"}}/>
        <Line2 style={{marginLeft:"354px", marginTop:"-88px"}}/>
        <h1 style={{marginLeft:"330px", marginTop:"-110px", color:"#0077b6"}}>2021</h1>
        <p style={{textAlign: 'center', marginTop:"110px", marginLeft:"20px"}}>12th | 87.7% <br/>
        Delhi Public School | CBSE </p>

        <Circle1 style={{marginLeft:"525px", marginTop:"-99px"}}/>
        <Line2 style={{marginLeft:"529px"}}/>
        <h1 style={{marginLeft:"503px", marginTop:"0px", color:"#0077b6"}}>2025</h1>
        <p style={{textAlign: 'center', marginTop:"-230px", marginLeft:"369px"}}>BTech in IT | 7.87 <br/>
        Manipal Institute of Technology | 2025 </p>

        <Circle2 style={{marginLeft:"688px", marginTop:"-6px"}}  />
        </Timeline>
        </ContentContainer>
        </Container>
    </>
  );
};

export const Head = () => <Seo title="Projects" />

export default AboutPage
