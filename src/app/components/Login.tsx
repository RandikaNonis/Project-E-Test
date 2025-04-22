import React, { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login, ready, authenticated } = usePrivy();
  const navigate = useNavigate();

  useEffect(() => {
    if (!ready) return;

    if (authenticated) {
      // ✅ Login successful
      console.log("User successfully logged in");
      navigate("/layout", { replace: true });
    } else {
      // 👇 Trigger login only if not authenticated
      login();
    }
  }, [ready, authenticated, login, navigate]);

  return null;
};

export default Login;
