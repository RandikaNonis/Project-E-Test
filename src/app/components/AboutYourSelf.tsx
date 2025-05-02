import React, { useState, useEffect } from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setUserInfo } from "../../store/slices/userSlice";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AboutYourSelf: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userInfo);

  const [userName, setUserName] = useState(user.name || "");
  const [userEmail, setUserEmail] = useState(user.email || "");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Validation
  useEffect(() => {
    if (!userName.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!userEmail.trim()) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(userEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  }, [userName, userEmail]);

  // Update Redux store if no errors
  useEffect(() => {
    if (!nameError && !emailError) {
      dispatch(
        setUserInfo({
          ...user,
          name: userName,
          email: userEmail,
        })
      );
    }
  }, [userName, userEmail, nameError, emailError]);

  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="aboutYourSelf.mainText"
            defaultMessage="Tell us about"
          />
        }
        highlightText={
          <FormattedMessage
            id="aboutYourSelf.highlightText"
            defaultMessage="Yourself?"
          />
        }
        highlightTextColor={"#0083C6"}
      />
      <Box
        component="form"
        sx={{
          marginTop: "15px",
          "& .MuiTextField-root": {
            m: 1,
            margin: "8px 0",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            fullWidth
            required
            label={<FormattedMessage id="user.nameLabel" defaultMessage="Name" />}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            error={!!nameError}
            helperText={nameError}
          />
        </div>
        <div>
          <TextField
            fullWidth
            required
            type="email"
            label={<FormattedMessage id="user.email" defaultMessage="Email" />}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
        </div>
      </Box>
    </>
  );
};

export default AboutYourSelf;
