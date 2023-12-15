import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/Root";
import FilmList from "./modules/FilmList";

import { Provider } from "react-redux";
import store from "./redux/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddFilm from "./modules/AddFilm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/films",
        element: <FilmList />,
      },
      {
        path: "/films/admin",
        element: <AddFilm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
