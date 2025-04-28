import React from "react";
// import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { resetCurrentPage } from "../../store/slices/pageSlice";
import { resetUserInfo } from "../../store/slices/userSlice";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { logout } = usePrivy();

  const handleOnClink = () => {
    sessionStorage.clear();
    dispatch(resetCurrentPage());
    dispatch(resetUserInfo());
    navigate("/");
  };

  return (
    <div>
      <h1>
        <FormattedMessage id={"loveMessage"} defaultMessage={"I love you"} />
      </h1>
      <h2>
        <FormattedMessage
          id={"testing"}
          defaultMessage={"This message is for testing"}
        />
      </h2>
      <h3>
        <FormattedMessage
          id={"helloWorld"}
          defaultMessage={"This is a hello world message"}
        />
      </h3>
      <Button onClick={handleOnClink}>
        <FormattedMessage id={"logout"} defaultMessage={"Logout"} />
      </Button>
    </div>
  );
};

export default Dashboard;
