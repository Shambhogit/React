import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import MyContest from "../hooks/useContext/MyContext.jsx";
import MoneyState from "../hooks/useContext/MoneyState.jsx";

createRoot(document.getElementById("root")).render(
  <MoneyState>
    <App />
  </MoneyState>
);
