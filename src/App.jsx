import Head from "./component/head";
import Body from "./component/body";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("Light");
    }
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="text-lg font-normal font-Josefin bg-lightMode-VeryLightGray dark:bg-darkMode-VeryDarkBlue">
      <Head handleClick={handleThemeSwitch} />
      <Body />
    </div>
  );
}
