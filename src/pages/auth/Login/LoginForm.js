import React from "react";
import { instinctLogo } from "../../../assets/svg";
import "./LoginForm.css";
import { useSelector } from "react-redux";
import { getThemes } from "../../../features/themeSlice";
function LoginForm() {
  const theme = useSelector(getThemes);
  return (
    <div
      className={`LoginForm ${
        theme.dark ? "darkMode-bg darkMode-text" : "lightMode-bg lightMode-text"
      }`}
    >
      <div className="LoginForm--heading">
        <div className="logo">{instinctLogo}</div>
        <h3 className="title">LOGIN</h3>
      </div>
      <form className="LoginForm--form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className={`${theme.dark ? "input-dark" : "input-light"}`}
            name="username"
            id="username"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className={`${theme.dark ? "input-dark" : "input-light"}`}
            name="password"
            id="password"
            type="password"
          />
        </div>
      </form>
      <div className="LoginForm--footer">
        <div>
          <p>Don't have an account ?</p>
          <a href="#">Register</a>
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
