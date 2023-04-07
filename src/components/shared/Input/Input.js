import React from "react";
import { useSelector } from "react-redux";
import { getThemes } from "../../../features/themeSlice";
import "./Input.css";
function Input({ label, name, type, value, onChange, disabled = false }) {
  const theme = useSelector(getThemes);
  return (
    <div className="form-group" data-screen="100px">
      <label htmlFor={name}>{label}</label>
      <input
        className={`${theme.dark ? "input-dark" : "input-light"}`}
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
