import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Catalogue from "./components/Catalogue";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: < App />,
    children: [
      {
        path: "/",
        element: <Catalogue />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);