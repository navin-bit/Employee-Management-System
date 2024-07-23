import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Form from "./components/Form";
import Table from "./components/Table";
import UpdateForm from "./components/UpdateForm";
import { StoreProvider } from "./service/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Table />} />
      <Route path="/employee/add" element={<Form />} />
      <Route path="/employee/edit/:id" element={<UpdateForm />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
