import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import { ThemeProvider } from "./Utils/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
