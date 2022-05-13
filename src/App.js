import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BaseLayout from "./Layout/Base.layout";
import RequireAuth from "./hooks/RequireAuth";
import RoleBasedRouting from "./router/RoleBasedRouting";
import Login from "./pages/login/Login.page";
import useAuth from "./hooks/useAuth";
import AppLogo from "./pages/login/Applogo.page";

const App = () => {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/redirect" element={<AppLogo />} />
        <Route element={<BaseLayout />}>
          <Route path="*" element={<RoleBasedRouting />} />
        </Route>
      </Route>
      <Route
        path="/login"
        element={auth?.user ? <Navigate to="/dashboard" /> : <Login />}
      />
    </Routes>
  );
};

export default App;
