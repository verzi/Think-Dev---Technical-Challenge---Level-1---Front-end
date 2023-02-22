import "./styles.css";
import { useState } from "react";
import themes from "./utils/themes.js";

export default function App() {
  const [theme, setTheme] = useState(themes.default);

  const toggleTheme = function () {
    let theme = themes.default;
    if (document.querySelector(".App").classList.contains(themes.default)) {
      theme = themes.dark;
    }
    setTheme(theme);
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Current theme: {theme}</h1>
      <p>
        Light themes have lighter backgrounds and darker font colors. Meanwhile,
        dark themes have darker backgrounds and lighter font colors. Dark themes
        prevent <strong>Eyes Strain </strong>
        and reduce device energy consumption
      </p>
      <h3>What we expect?</h3>
      <p>The button below should toggle between light and dark mode</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
