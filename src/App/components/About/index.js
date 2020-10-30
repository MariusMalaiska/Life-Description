import React, { useContext } from "react";
import "./index.scss";
// import myImage from "../../styles/images/myimg.jpeg";
import Data from "../../json/data.json";
import { LanguageContext } from "../../../providers/language.provider";

function About() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="About">
      <div className="Container">
        <h2 className="About-header">{Data[language].about.title}</h2>
        <p className="About-text">{Data[language].about.text}</p>
      </div>
    </div>
  );
}

export default About;
