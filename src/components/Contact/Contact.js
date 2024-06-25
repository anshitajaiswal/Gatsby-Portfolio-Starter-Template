import * as React from "react";
import Button from "../button/Button";
import { ContactStyles } from "./ContactStyles";
import styled from "styled-components";
import { useState, useEffect } from "react";



const ContactForm = styled.form`
  width: 100%; /* Ensure form takes full width */
  max-width: 750px; /* Adjust as needed */
`;

const Contact = ({ theme, toggleTheme }) => {

  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#000000" : "#e9e9e9");
    setColor2(theme === "dark" ? "#808080" : "#888");
    console.log(theme);
  }, [theme]);

  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#000000" : "#444");
  const [Color2, setColor2] = useState(theme === "dark" ? "808080" : "#888");

  return (
   
      <ContactForm name="contact" >
        <ContactStyles className="section">
          <input style={{backgroundColor: backgroundColor, color: Color2}} placeholder="Your name..." type="text" name="name" />
          <input style={{backgroundColor: backgroundColor, color: Color2}} placeholder="Your email..." type="email" name="email" />
          <textarea
            placeholder="Your message..."
            name="message"
            rows="5"
            style={{backgroundColor: backgroundColor, color: Color2}}
          ></textarea>
          <Button/>
        </ContactStyles>
      </ContactForm>
    
  );
};

export default Contact;
