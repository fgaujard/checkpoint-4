// Import React elements here

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

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
import EditBasic from "./pages/EditBasic";

import Map from "./pages/Map";

import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Admin from "./pages/Admin";

import NotFound from "./pages/NotFound";

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

function fetchAllTipsId() {
  return Promise.all([
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/keyword-with-id`),
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

function fetchKeyword(acronyme) {
  return fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/keyword/${acronyme}`
  ).then((keyword) => {
    // check if the response is ok
    if (!keyword.ok) {
      throw new Error("Network response was not ok");
    }
    // return all datas from one keyword in JSON
    return keyword.json();
  });
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

function fetchBasicByName(name) {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/basics/${name}`).then(
    (basic) => {
      // check if the response is ok
      if (!basic.ok) {
        throw new Error("Network response was not ok");
      }
      // return all datas from basics tutorials in JSON
      return basic.json();
    }
  );
}

/* ************************************************************************ */
/*              Fetch data relative of "users" for my rooter                */
/* ************************************************************************ */

function VerifyToken() {
  return axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/api/verify-token`, {
      withCredentials: true,
    })
    .then((res) => {
      const response = res.data;
      const user = {
        id: response.id,
        username: response.username,
        email: response.email,
        role: response.user_role,
        team: response.user_team,
        admin: res.data.is_admin.data[0] === 1,
        login: true,
      };
      return user;
    })
    .catch(() => {
      const user = {
        id: null,
        username: null,
        email: null,
        role: null,
        team: null,
        admin: false,
        login: false,
      };
      return user;
    });
}

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
    loader: () => {
      return VerifyToken();
    },
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
          return VerifyToken();
        },
      },
      {
        path: "/keywords",
        element: <KeywordsList />,
        loader: async () => {
          const [allTips, user] = await Promise.all([
            fetchAllTips(),
            VerifyToken(),
          ]);
          return { allTips, user };
        },
      },
      {
        path: "/keywords/:name",
        element: <Keyword />,
        loader: async ({ params }) => {
          const [keyword, user] = await Promise.all([
            fetchKeyword(params.name),
            VerifyToken(),
          ]);
          return { keyword, user };
        },
      },
      {
        path: "/create-keyword",
        element: <KeywordCreate />,
        loader: () => {
          return VerifyToken();
        },
      },
      {
        path: "/basics",
        element: <Basics />,
        loader: async () => {
          const [basics, user] = await Promise.all([
            fetchBasics(),
            VerifyToken(),
          ]);
          return { basics, user };
        },
      },
      {
        path: "/basics-editor/:name",
        element: <EditBasic />,
        loader: async ({ params }) => {
          const [basic, user] = await Promise.all([
            fetchBasicByName(params.name),
            VerifyToken(),
          ]);
          return { basic, user };
        },
      },
      {
        path: "/map",
        element: <Map />,
        loader: async () => {
          const [allTips, user] = await Promise.all([
            fetchAllTipsId(),
            VerifyToken(),
          ]);
          return { allTips, user };
        },
      },
      {
        path: "/login",
        element: <Login />,
        loader: () => {
          return VerifyToken();
        },
      },
      {
        path: "/profil",
        element: <Profil />,
        loader: () => {
          return VerifyToken();
        },
      },
      {
        path: "/administration",
        element: <Admin />,
        loader: () => {
          return VerifyToken();
        },
      },
      {
        path: "*",
        element: <NotFound />,
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
