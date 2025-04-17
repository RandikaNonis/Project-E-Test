import React, { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login, ready, authenticated } = usePrivy();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready) {  
        if (authenticated) {
          navigate("/layout", { replace: true });
        } else{
          login();
        }
      }
  }, [ready, authenticated, login, navigate]);

  return <></>;
};

export default Login;
