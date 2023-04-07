import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";

function Layout() {
  return (
    <Routes>
      {/* auth routes */}
      <Route path="/*" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default Layout;
