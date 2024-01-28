import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MyProvider } from "./context/MyContext.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <React.StrictMode>
        <MyProvider>
        <App />
        </MyProvider>
      </React.StrictMode>
    </BrowserRouter>
);