import React from "react";
import ReactDOM from "react-dom";
import "../src/App/styles/scss/styles.scss";
import App from "./App/";
import { LanguageProvider } from "./providers/language.provider";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
