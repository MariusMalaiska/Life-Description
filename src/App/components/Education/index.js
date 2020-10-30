import React, { useContext } from "react";
import "./index.scss";
import calogo from "../../styles/images/ca_logo.png";
import Data from "../../json/data.json";
import { LanguageContext } from "../../../providers/language.provider";

function Education() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="Education">
      <div className="Container">
        <h2 className="Education-header">{Data[language].education.title}</h2>
        <ul className="Education-list">
          <li className="Education--list--box">
            <img
              className="Education--logo"
              alt="Code Academy Logo"
              src={calogo}
            ></img>
            <ul className="Education--list">
              <li className="Education--list--line">
                <p className="Education--list--title">
                  {Data[language].education.classone.title}
                </p>
              </li>
              <li className="Education--list--line">
                <p className="Education--list--Date">
                  {Data[language].education.classone.date}
                </p>
              </li>
              <li className="Education--list--line">
                <p className="Education--list--About">
                  {Data[language].education.classone.about}
                </p>
              </li>
            </ul>
          </li>
          <li className="Education--list--box">
            <img
              className="Education--logo"
              alt="Code Academy Logo"
              src={calogo}
            ></img>
            <ul className="Education--list">
              <li className="Education--list--line">
                <p className="Education--list--title">
                  {Data[language].education.classtwo.title}
                </p>
              </li>
              <li className="Education--list--line">
                <p className="Education--list--Date">
                  {Data[language].education.classtwo.date}
                </p>
              </li>
              <li className="Education--list--line">
                <p className="Education--list--About">
                  {Data[language].education.classtwo.about}
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
