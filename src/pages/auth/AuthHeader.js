import React from "react";
import "./AuthHeader.css";
import { useSelector } from "react-redux";
import ThemeToggler from "../../components/shared/ThemeToggler";
import { instinctLogo } from "../../assets/svg";
function AuthHeader() {
  const count = useSelector((state) => state.theme);

  console.log(count);
  return (
    <div className="AuthHeader">
      <h1>instinct</h1>
      {instinctLogo}
      <ThemeToggler />
    </div>
  );
}

export default AuthHeader;
