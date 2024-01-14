import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import Keywords from "./pages/Keywords";
import Login from "./pages/Login";
import Basics from "./pages/Basics";
import Map from "./pages/Map";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Accueil /> },
      {
        path: "/mots-clés",
        element: <Keywords />,
      },
      {
        path: "/basics",
        element: <Basics />,
      },
      { path: "/connexion", element: <Login /> },
      {
        path: "/map",
        element: <Map />,
      },
      /*
      {
        path: "/mot-clé/:id",
        element: <KeywordDescribe />,
        loader: ({ params }) => {
          return fetch(`http://localhost:3310/api/keyword/${params.id}`);
        },
      },
      {
        path: "/Profil",
        element: <Profil />,
      },
    */
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
