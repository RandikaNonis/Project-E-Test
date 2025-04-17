import React, { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { logout, authenticated } = usePrivy();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      // Redirect to home page after logout
      navigate("/");
    }
  }, [authenticated, navigate]);

  return (
    <div>
      <h1>This is Dashboard</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
