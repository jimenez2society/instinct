import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login/Login";

function Layout() {
  return (
    <Routes>
      {/* auth routes */}
      <Route path="/*" element={<AuthLayout />} />
    </Routes>
  );
}

export default Layout;
