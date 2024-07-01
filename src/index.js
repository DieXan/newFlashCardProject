import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import Editor from "./pages/Editor";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import Load from "./pages/Load";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<App />} />
          <Route path="editor" element={<Editor />} />
          <Route path="load" element={<Load />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);
