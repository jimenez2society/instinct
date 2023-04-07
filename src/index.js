import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { setInitialTheme } from "./features/themeSlice";
if (!localStorage.getItem("theme")) {
  store.dispatch(setInitialTheme());
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
