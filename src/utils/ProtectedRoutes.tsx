import { usePrivy } from "@privy-io/react-auth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes: React.FC = () => {
  const { authenticated } = usePrivy();
  const language = sessionStorage.getItem('language');

  if (authenticated) {
    return <Outlet />;
  }

  if (!language) {
    return <Navigate to="/layout" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
