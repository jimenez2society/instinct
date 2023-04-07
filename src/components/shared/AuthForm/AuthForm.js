import React from "react";
import { useSelector } from "react-redux";
import { getThemes } from "../../../features/themeSlice";
import { instinctLogo } from "../../../assets/svg";
import "./AuthForm.css";
import Input from "../Input/Input";
import { NavLink } from "react-router-dom";
function AuthForm(props) {
  const theme = useSelector(getThemes);
  return (
    <div
      className={`AuthForm ${
        theme.dark ? "darkMode-bg darkMode-text" : "lightMode-bg lightMode-text"
      }`}
    >
      <div className="AuthForm--heading">
        <div className="logo">{instinctLogo}</div>
        <h3 className="title">{props.title}</h3>
      </div>
      <form className="AuthForm--form">
        {props.children}
        <div className="AuthForm--footer">
          <div>
            <p>{props.linkQuestion}</p>
            <NavLink to={`${props.link}`}>{props.linkTitle}</NavLink>
          </div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
