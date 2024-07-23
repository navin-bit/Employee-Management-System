import React from "react";
import { Link } from "react-router-dom";

export default function Add() {
  return (
    <div>
      <Link to={"/employee/add"} >
      <button
        type="submit"
        className="bg-black rounded px-6 py-3 mt-3 text-center text-white"
      >
        Add New
      </button>
      </Link>
    </div>
  );
}
