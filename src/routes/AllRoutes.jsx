import React from "react";
import { Route, Routes } from "react-router-dom";
import Data from "../components/data";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Report from "../components/report";
import User from "../components/User";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<Data />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
