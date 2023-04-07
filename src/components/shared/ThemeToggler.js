import React from "react";
import { darkMode, lightMode } from "../../assets/svg";
import { useDispatch, useSelector } from "react-redux";
import { getThemes, toggleTheme } from "../../features/themeSlice";
import "./ThemeToggler.css";
function ThemeToggler() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => getThemes(state));
  console.log(theme);
  return (
    <div
      onClick={() => dispatch(toggleTheme())}
      className={`ThemeToggler ${theme.dark ? "dark" : "light"}`}
    >
      {theme.dark ? lightMode : darkMode}
    </div>
  );
}

export default ThemeToggler;
