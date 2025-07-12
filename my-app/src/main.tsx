import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SkeletonTheme } from "react-loading-skeleton";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#d9d9d9">
    <App />
    </SkeletonTheme>
  </React.StrictMode>,
);
