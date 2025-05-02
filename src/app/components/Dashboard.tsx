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
  const user = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
  // const { logout } = usePrivy();

  const handleOnClick = () => {
    sessionStorage.clear();
    dispatch(resetCurrentPage());
    dispatch(resetUserInfo());
    navigate("/layout");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <div>
          <img
            style={{ width: "100px", borderRadius: "50%" }}
            alt="profile"
            src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          />
        </div>
        <h3>{user?.name}</h3>
        <h3>{user?.email}</h3>
        <h3>{user?.mobileNumber}</h3>
        <Button variant="outlined" onClick={handleOnClick}>
          <FormattedMessage id={"logout"} defaultMessage={"Logout"} />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
