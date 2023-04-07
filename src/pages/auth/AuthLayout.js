import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthHeader from "./AuthHeader";
import "./AuthLayout.css";
import { useSelector } from "react-redux";
import { getThemes } from "../../features/themeSlice";
function AuthLayout() {
  const { dark, light } = useSelector(getThemes);
  return (
    <div className={`AuthLayout ${dark && "dark"} ${light && "light"}`}>
      <AuthHeader />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
