import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/shared.css";
import "./styles/transitions.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
