import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "../pages/Student/Dashboard/Dashboard";
import ShowCase from "../pages/Student/Showcase.page";
import NotFound from "../pages/NotFound.page";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<StudentDashboard />} />
      <Route path="dashboard" exact element={<StudentDashboard />} />
      <Route path="showcase" exact element={<ShowCase />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default StudentRoutes;
