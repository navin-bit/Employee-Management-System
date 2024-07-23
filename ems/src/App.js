import React from "react";
import Heading from "./components/Heading";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Heading />
      <section>
        <Outlet />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
