// Import React elements here

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PagesProvider } from "./contexts/PagesContext";

// Import JSX content elements here

import App from "./App";

import Accueil from "./pages/Accueil";
import Culture from "./pages/Culture";

import Recap from "./pages/Recap";

import KeywordsList from "./pages/KeywordsList";
import Keyword from "./pages/Keyword";
import KeywordCreate from "./components/keyword/KeywordCreate";

import Basics from "./pages/Basics";
import Map from "./pages/Map";

import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Admin from "./pages/Admin";

/* ************************************************************************ */
/* Fetch data relative of keywords and associated categories for my rooter  */
/* ************************************************************************ */

function fetchAllTips() {
  return Promise.all([
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/keyword`),
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`),
  ]).then(([keywords, categories]) => {
    // check if the response is ok
    if (!keywords.ok || !categories.ok) {
      throw new Error("Network response was not ok");
    }
    // return an array of keywords and categories accociated, in JSON
    return Promise.all([keywords.json(), categories.json()]);
  });
}

function fetchKeyword(name) {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/keyword/${name}`).then(
    (keyword) => {
      // check if the response is ok
      if (!keyword.ok) {
        throw new Error("Network response was not ok");
      }
      // return all datas from one keyword in JSON
      return keyword.json();
    }
  );
}

/* ************************************************************************ */
/*         Fetch datas relative of "recap SACOD" for my rooter          */
/* ************************************************************************ */
/*
function fetchRecap() {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recap`).then(
    (recap) => {
      // check if the response is ok
      if (!recap.ok) {
        throw new Error("Network response was not ok");
      }
      // return all datas from basics tutorials in JSON
      return recap.json();
    }
  );
}
*/
/* ************************************************************************ */
/*         Fetch datas relative of "basics tutorial" for my rooter          */
/* ************************************************************************ */
/*
function fetchBasics() {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/basics`).then(
    (basics) => {
      // check if the response is ok
      if (!basics.ok) {
        throw new Error("Network response was not ok");
      }
      // return all datas from basics tutorials in JSON
      return basics.json();
    }
  );
}
*/
/* ************************************************************************ */
/*              Fetch data relative of "users" for my rooter                */
/* ************************************************************************ */
/*
function fetchProfil(username) {
  return fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/users/${username}`
  ).then((user) => {
    // check if the response is ok
    if (!user.ok) {
      throw new Error("Network response was not ok");
    }
    // return selected datas from one user in JSON
    return user.json();
  });
}
*/
/* ************************************************************************ */
/*             Fetch datas relative of "Packages" for my rooter             */
/* ************************************************************************ */
/*
function fetchPackages() {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/packages`).then(
    (basics) => {
      // check if the response is ok
      if (!basics.ok) {
        throw new Error("Network response was not ok");
      }
      // return all datas from basics tutorials in JSON
      return basics.json();
    }
  );
}
*/
/* ************************************************************************ */
/*                            My Browser Rooter                             */
/* ************************************************************************ */

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Accueil /> },
      {
        path: "/culture-dev",
        element: <Culture />,
        loader: () => {
          // return fetchBasics();
          return null;
        },
      },
      {
        path: "/recap",
        element: <Recap />,
        loader: () => {
          // return fetchProfil();
          return null;
        },
      },
      {
        path: "/keywords",
        element: <KeywordsList />,
        loader: () => {
          return fetchAllTips();
        },
      },
      {
        path: "/keywords/:name",
        element: <Keyword />,
        loader: ({ params }) => {
          return fetchKeyword(params.name);
        },
      },
      { path: "/create-keyword", element: <KeywordCreate /> },
      {
        path: "/basics",
        element: <Basics />,
        loader: () => {
          // return fetchBasics();
          return null;
        },
      },
      {
        path: "/map",
        element: <Map />,
        loader: () => {
          return fetchAllTips();
        },
      },
      { path: "/login", element: <Login /> },
      {
        path: "/profil",
        element: <Profil />,
        loader: () => {
          // return fetchProfil();
          return null;
        },
      },
      {
        path: "/administration",
        element: <Admin />,
        loader: () => {
          // return fetchProfil();
          return null;
        },
      },
      {
        path: "*",
        element: (
          <h1 style={{ marginTop: "10rem", textAlign: "center" }}>
            404 NOT FOUND
          </h1>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PagesProvider>
      <RouterProvider router={router} />
    </PagesProvider>
  </React.StrictMode>
);
