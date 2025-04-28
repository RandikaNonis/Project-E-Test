// import { usePrivy } from "@privy-io/react-auth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes: React.FC = () => {
  // const { authenticated } = usePrivy();
  const userDetails = sessionStorage.getItem('userInfo');

  if (userDetails) {
    return <Outlet />;
  }

  return <Navigate to="/layout" replace />;
};

export default ProtectedRoutes;
