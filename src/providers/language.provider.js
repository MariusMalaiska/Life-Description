import React, { useState } from "react";

const LanguageContext = React.createContext({});

let defauLanguage = "En";

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(defauLanguage);

  if (/lt(-.*)?$/.test(navigator.language)) {
    defauLanguage = "Lt";
  } else {
    defauLanguage = "En";
  }

  const toggleLanguage = () => {
    if (language === "Lt") {
      setLanguage("En");
    } else {
      setLanguage("Lt");
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
