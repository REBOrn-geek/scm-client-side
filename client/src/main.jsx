import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Catalogue from "./components/Catalogue";
import FormCatalogue from "./components/CatalogueForm";

import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


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
  {
    path: "/create",
    element: < App />,
    children: [
      {
        path: "/create",
        element: <FormCatalogue/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);