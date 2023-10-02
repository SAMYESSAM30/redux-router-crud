import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import Details from "./Pages/Details";
import Index from "./Pages/Indexes";
import ErrorPage from "./Pages/ErrorPage";

import { Provider } from "react-redux";
import store from './state/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      { path: "post/add", element: <Add /> },
      { path: "post/:id/edit", element: <Edit /> },
      {
        path: "post/:id",
        element: <Details />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "plase make sure to insert correct post ID",
              status: 400,
            });
          }
        },
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

);
