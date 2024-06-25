import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Contact from "../components/Contact/Contact"
import styled from "styled-components"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa";



const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin-left:45px;
  color: #888;
  margin-bottom: 60px;
`;

const LinkContainer = styled.div`
  display: flex;
  gap:20px;
  margin-top:100px;
  margin-bottom: 60px;
  justify-content: center;
`;

const contactPage = ({ theme, toggleTheme }) => {
  return(
    <>
    <h1 style={{ marginLeft: "45px", fontSize: "40px", marginTop: "90px", color:"#6EBDE7" }}>Lets's Connect</h1>
    <Container>
    <p>You can add contact information about you here. </p>
   
    </Container>
    <CenteredContainer>
        <Contact theme={theme} toggleTheme={toggleTheme}/>
        </CenteredContainer>

        <LinkContainer>
  
                  <a
                    href={`https://www.twitter.com/`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Twitter color="#6EBDE7"/>
                  </a>
                
            
                  <a
                    href={`https://www.facebook.com/`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Facebook color="#6EBDE7"/>
                  </a>
                
                  <a
                    href={`https://www.instagram.com/`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram color="#6EBDE7"/>
                  </a>
                  </LinkContainer>
        
    </>
  );
};

export const Head = () => <Seo title="Projects" />

export default contactPage
