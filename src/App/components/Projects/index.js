import React, { useContext } from "react";
import "./index.scss";
import Data from "../../json/data.json";
import { LanguageContext } from "../../../providers/language.provider";
import staliupaslaugos from "../../styles/images/Staliupaslaugos.png";
import vintedcopy from "../../styles/images/vinted-copy.png";
import homepage from "../../styles/images/Homepage.png";

function Projects() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="Projects">
      <div className="Container">
        <h2 className="Projects-header">{Data[language].projects.title}</h2>
        <div className="Projects--box">
          <div className="Project Desktop">
            <a
              className="Project--link"
              href={Data[language].projects.projectthree.herf}
            >
              <picture className="Desktop--picture" >
                <img
                  className="Project--img"
                  alt={Data[language].projects.projectthree.title}
                  src={homepage}
                ></img>
                <p className="Overlay">{Data[language].projects.projectthree.intro}</p></picture>
              <h4 className="Project--name">
                {Data[language].projects.projectthree.title}
              </h4>
            </a>

          </div>
          <div className="Project">
            <a
              className="Project--link"
              href={Data[language].projects.projectone.herf}
            >
              <img
                className="Project--img"
                alt={Data[language].projects.projectone.title}
                src={staliupaslaugos}
              ></img>
              <h4 className="Project--name">
                {Data[language].projects.projectone.title}
              </h4>
            </a>
          </div>
          <div className="Project">
            <a
              className="Project--link"
              href={Data[language].projects.projecttwo.herf}
            >
              <img
                className="Project--img"
                alt={Data[language].projects.projecttwo.title}
                src={vintedcopy}
              ></img>
              <h4 className="Project--name">
                {Data[language].projects.projecttwo.title}
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
