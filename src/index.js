import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeProvider } from "./context/DarkModeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/details", element: <Details /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);
