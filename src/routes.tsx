import React from "react";
import { Routes, Route } from "react-router-dom";
import WrapperContent from "./app/components/WrapperContent";
import Login from "./app/components/Login";
import Dashboard from "./app/components/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/layout" element={<WrapperContent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
