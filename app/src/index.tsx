import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, Routes } from "react-router-dom";
import "./index.css";
import { routers } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
