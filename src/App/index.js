import React from "react";
import "./styles/scss/styles.scss";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Media from "./components/Media";

function App() {
  return (
    <div className="App">
      <Header />
      <Media>
        <About />
        <Skills />
      </Media>
      <Media>
        <Education />
        <Projects />
      </Media>
      <Contacts />
    </div>
  );
}

export default App;
