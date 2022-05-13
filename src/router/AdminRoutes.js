import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/Admin/Dashboard";
import Monitoring from "../pages/Admin/Monitoring.page";
import NotFound from "../pages/NotFound.page";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<AdminDashboard />} />
      <Route path="dashboard" exact element={<AdminDashboard />} />
      <Route path="monitoring" exact element={<Monitoring />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
