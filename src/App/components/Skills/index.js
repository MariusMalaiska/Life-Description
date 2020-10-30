import React from "react";
import Parallax from "react-rellax";
import "./index.scss";
import react from "../../styles/images/react.svg";
import node from "../../styles/images/node.png";
import vue from "../../styles/images/Vue.png";
import js from "../../styles/images/js.png";
import css from "../../styles/images/CSS.png";
import html from "../../styles/images/HTML.png";
import Webpack from "../../styles/images/Webpack.png";
import sass from "../../styles/images/sass.png";

function About() {
  return (
    <div className="Skills">
      <div className="Container">
        <div class="Background">
          <div class="Foreground">
            <div class="Foreground--content">
              <Parallax speed={-2}>
                <img className="Skills--logo" alt="react js" src={react}></img>
              </Parallax>
              <Parallax speed={-1}>
                <img className="Skills--logo" alt="vue js" src={vue}></img>
              </Parallax>
            </div>
            <div class="Foreground--content">
              <Parallax speed={1}>
                <img className="Skills--logo" alt="java script" src={js}></img>
              </Parallax>
              <Parallax speed={2}>
                <img className="Skills--logo" alt="node js" src={node}></img>
              </Parallax>
              <Parallax speed={-3}>
                <img className="Skills--logo" alt="css" src={css}></img>
              </Parallax>
              <Parallax speed={1}>
                <img className="Skills--logo" alt="html" src={html}></img>
              </Parallax>
            </div>
            <div class="Foreground--content">
              <Parallax speed={-3}>
                <img className="Skills--logo" alt="sass" src={sass}></img>
              </Parallax>
              <Parallax speed={-2}>
                <img className="Skills--logo" alt="webpack" src={Webpack}></img>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
