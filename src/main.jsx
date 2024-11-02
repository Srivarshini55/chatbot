import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css' ;
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
      
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
