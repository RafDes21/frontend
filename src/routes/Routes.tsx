import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Clients from "../pages/AddClients";
import Home from "../pages/Home";
import { ToastContainer } from "react-toastify";

const CompRoutes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/addClient" element={<Clients />} />
          <Route path="/addClient/:id" element={<Clients />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default CompRoutes;
