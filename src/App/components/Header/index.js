import React, { useContext } from "react";
import "./index.scss";
import myImage from "../../styles/images/myImg.jpeg";
import Data from "../../json/data.json";
import { LanguageContext } from "../../../providers/language.provider";

function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="Header">
      <div className="Container">
        <ul className="Header-list">
          <li className="Header-list-line">
            <img className="My-img" alt="felix logo" src={myImage}></img>
          </li>
          <li className="Header-list-line">
            <h2 className="Header-list-name">{Data[language].header.title}</h2>
          </li>
        </ul>
      </div>
      <button onClick={toggleLanguage} className="Language--btn">
        {language}
      </button>
    </header>
  );
}

export default Header;
