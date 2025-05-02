import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import SharedButton from "../shared/SharedButton";
import styles from "../styles/Login.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/slices/pageSlice";
import { setUserInfo } from "../../store/slices/userSlice";
import { RootState } from "../../store";
// import { usePrivy } from "@privy-io/react-auth";
// import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const currentUserInfo = useSelector(
    (state: RootState) => state.user.userInfo
  );
  // const { login, ready, authenticated } = usePrivy();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!ready) return;

  //   if (authenticated) {
  //     // ✅ Login successful
  //     console.log("User successfully logged in");
  //     navigate("/layout", { replace: true });
  //   } else {
  //     // 👇 Trigger login only if not authenticated
  //     login();
  //   }
  // }, [ready, authenticated, login, navigate]);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Access Token:", tokenResponse.access_token);

      try {
        // Fetch user info using access token
        const { data } = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const userInfo = {
          name: data.name,
          email: data.email,
          mobileNumber: "",
          picture: data.picture,
        };
        dispatch(setUserInfo(userInfo));
        dispatch(setCurrentPage("everything-looks-good"));
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
    flow: "implicit",
  });

  const handleContinue = () => {
    if (!mobileNumber) {
      setMobileNumberError("Mobile number is required");
      return;
    }

    if (!validateMobileNumber(mobileNumber)) {
      setMobileNumberError("Enter a valid 10-digit mobile number");
      return;
    }

    dispatch(
      setUserInfo({
        ...currentUserInfo,
        mobileNumber: mobileNumber,
      })
    );
    dispatch(setCurrentPage("otp"));
  };

  const validateMobileNumber = (number: string): boolean => {
    return /^[0-9]{10}$/.test(number);
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileNumber(value);

    if (!value) {
      setMobileNumberError("Mobile number is required");
    } else if (!validateMobileNumber(value)) {
      setMobileNumberError("Enter a valid 10-digit mobile number");
    } else {
      setMobileNumberError("");
    }
  };

  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="login.mainText"
            defaultMessage="How do you like to"
          />
        }
        highlightText={
          <FormattedMessage id="login.highlightText" defaultMessage="Login?" />
        }
        highlightTextColor={"#2D9C5C"}
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
            id="outlined-required"
            label={
              <FormattedMessage
                id="user.mobileNumber"
                defaultMessage="Mobile Number"
              />
            }
            value={mobileNumber}
            onChange={handleMobileChange}
            error={!!mobileNumberError}
            helperText={mobileNumberError}
          />
        </div>
      </Box>
      <br />
      <SharedButton
        text={
          <FormattedMessage
            id={"sharedButton.unAuthenticated"}
            defaultMessage={"Continue"}
          />
        }
        onClick={handleContinue}
        withIcon
      />
      <div className={styles.divider}>OR</div>
      <button
        onClick={() => login()}
        type="button"
        className={`${styles.googleSignInButton} ${styles.socialButtons}`}
      >
        <div
          className={`${styles.googleLogo} ${styles.socialButtonsLogo}`}
        ></div>
        <span>Continue with Google</span>
      </button>
      <button className={`${styles.appleButton} ${styles.socialButtons}`}>
        <svg
          className={styles.socialButtonsLogo}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 17"
          fill="white"
        >
          <path d="M13.989 13.973c-.276.64-.604 1.228-.983 1.767-.519.726-.944 1.224-1.278 1.494-.511.456-1.06.69-1.648.704-.421 0-.927-.12-1.518-.358-.592-.239-1.135-.358-1.632-.358-.522 0-1.08.12-1.672.358-.591.238-1.07.358-1.435.358-.624-.017-1.2-.27-1.73-.758C1.28 16.952.56 15.755 0 14.153c-.617-1.733-.926-3.395-.926-4.985 0-1.305.293-2.466.88-3.48.586-1.016 1.354-1.798 2.305-2.347.49-.267 1.157-.409 2-.424.44 0 1.014.13 1.72.39.707.26 1.17.39 1.39.39.16 0 .687-.165 1.58-.496.85-.304 1.565-.43 2.144-.39 1.582.128 2.777.796 3.582 2.004-1.413.852-2.116 2.042-2.11 3.57.008 1.188.44 2.193 1.297 3.013.386.38.803.684 1.25.915zM10.46 0c0 1.08-.39 2.072-1.173 2.976-.954 1.07-2.1 1.688-3.34 1.59a3.642 3.642 0 0 1-.03-.458c0-1.032.41-2.014 1.232-2.944C7.978.454 8.973 0 10.46 0z" />
        </svg>
        <span>Continue with Apple</span>
      </button>
      <button
        type="button"
        className={`${styles.facebookSignInButton} ${styles.socialButtons}`}
      >
        <div
          className={`${styles.facebookLogo} ${styles.socialButtonsLogo}`}
        ></div>
        <span>Continue with Facebook</span>
      </button>
    </>
  );
};

export default Login;
