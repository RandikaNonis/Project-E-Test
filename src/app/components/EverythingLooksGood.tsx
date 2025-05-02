import React, { useState, useEffect } from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setUserInfo } from "../../store/slices/userSlice";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[0-9]{10}$/;

const EveryThingLooksGood: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userInfo);

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber || "");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  // Validation
  useEffect(() => {
    if (!name.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    if (!mobileNumber.trim()) {
      setMobileError("Mobile number is required");
    } else if (!mobileRegex.test(mobileNumber)) {
      setMobileError("Mobile number must be 10 digits");
    } else {
      setMobileError("");
    }
  }, [name, email, mobileNumber]);

  // Update Redux store if no validation errors
  useEffect(() => {
    if (!nameError && !emailError && !mobileError) {
      dispatch(
        setUserInfo({
          ...user,
          name,
          email,
          mobileNumber,
        })
      );
    }
  }, [name, email, mobileNumber, nameError, emailError, mobileError]);

  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="everythingLooksGood.mainText"
            defaultMessage="Everything looks"
          />
        }
        highlightText={
          <FormattedMessage
            id="everythingLooksGood.highlightText"
            defaultMessage="good?"
          />
        }
        highlightTextColor={"#E92A35"}
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
            label={
              <FormattedMessage id="user.nameLabel" defaultMessage="Name" />
            }
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
        </div>
        <div>
          <TextField
            fullWidth
            required
            label={
              <FormattedMessage
                id="user.mobileNumber"
                defaultMessage="Mobile Number"
              />
            }
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            error={!!mobileError}
            helperText={mobileError}
          />
        </div>
      </Box>
    </>
  );
};

export default EveryThingLooksGood;
