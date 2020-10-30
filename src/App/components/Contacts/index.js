import React, { useContext } from "react";
import "./index.scss";
import gitHub from "../../styles/images/gitHub.png";
import codepen from "../../styles/images/codepen.png";
import phone from "../../styles/images/phone.png";
import mail from "../../styles/images/mail.png";
import linkedin from "../../styles/images/linkedin.png";
import Data from "../../json/data.json";
import { LanguageContext } from "../../../providers/language.provider";

function Contacts() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="Contacts">
      <div className="Container">
        <h2 className="Contacts-header">{Data[language].contacts.title}</h2>
        <ul className="Contacts--list">
          <li className="Contacts--list--box">
            <a
              href={Data[language].contacts.github.herf}
              className="Contacts--hyperlink"
            >
              <img
                className="Contacts--logo"
                alt="gitHub Logo"
                src={gitHub}
              ></img>
              <p className="Contacts--list--title">
                {Data[language].contacts.github.title}
              </p>
            </a>
          </li>
          <li className="Contacts--list--box">
            <a
              href={Data[language].contacts.codepen.herf}
              className="Contacts--hyperlink"
            >
              <img
                className="Contacts--logo"
                alt="codepen Logo"
                src={codepen}
              ></img>
              <p className="Contacts--list--title">
                {Data[language].contacts.codepen.title}
              </p>
            </a>
          </li>
          <li className="Contacts--list--box">
            <a
              href={Data[language].contacts.email.herf}
              className="Contacts--hyperlink"
            >
              <img className="Contacts--logo" alt="mail Logo" src={mail}></img>
              <p className="Contacts--list--title">
                {Data[language].contacts.email.title}
              </p>
            </a>
          </li>
          <li className="Contacts--list--box">
            <a
              href={Data[language].contacts.linkedin.herf}
              className="Contacts--hyperlink"
            >
              <img
                className="Contacts--logo"
                alt="linkedin Logo"
                src={linkedin}
              ></img>
              <p className="Contacts--list--title">
                {Data[language].contacts.linkedin.title}
              </p>
            </a>
          </li>
          <li className="Contacts--list--box">
            <a
              href={Data[language].contacts.phone.herf}
              className="Contacts--hyperlink"
            >
              <img
                className="Contacts--logo"
                alt="phone Logo"
                src={phone}
              ></img>
              <p className="Contacts--list--title">
                {Data[language].contacts.phone.title}
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
