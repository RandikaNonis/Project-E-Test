import React, { useEffect } from "react";
import styles from "../styles/WrapperContent.module.css";
import LanguageSelection from "./LanguageSelection";
import SharedButton from "../shared/SharedButton";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
// import { usePrivy } from "@privy-io/react-auth";
import EveryThingLooksGood from "./EverythingLooksGood";
import { FormattedMessage } from "react-intl";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { resetCurrentPage, setCurrentPage } from "../../store/slices/pageSlice";
import OTPScreen from "./OTPScreen";
import AboutYourSelf from "./AboutYourSelf";
// import OTPScreen from "./otpScreen";

const WrapperContent: React.FC = () => {
  const language = sessionStorage.getItem("language");
  const userDetails = useSelector((state: RootState) => state.user.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.page.currentPage);

  useEffect(() => {
    // When WrapperContent mounts, decide the initial page
    console.log(userDetails);
    if (userDetails && Object.keys(userDetails).length !== 0) {
      dispatch(setCurrentPage("everything-looks-good"));
    } else if (language) {
      dispatch(setCurrentPage("login"));
    } else {
      dispatch(setCurrentPage("language-selection"));
    }
  }, [dispatch, language, userDetails]);

  const handleContinue = () => {
    if (currentPage === "language-selection") {
      dispatch(setCurrentPage("login"));
    } else if (currentPage === "everything-looks-good") {
      sessionStorage.setItem("userInfo", JSON.stringify(userDetails));
      navigate("/");
    } else if (currentPage === "otp") {
      dispatch(setCurrentPage("about-your-self"));
    } else if (currentPage === "about-your-self") {
      dispatch(resetCurrentPage());
      navigate("/");
    }
  };

  let centerContent: React.ReactNode = null;
  let showSharedButton = false;
  let sharedButtonText: React.ReactNode = null;

  switch (currentPage) {
    case "everything-looks-good":
      centerContent = <EveryThingLooksGood />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.authenticated"
          defaultMessage="Yes, looks good"
        />
      );
      break;
    case "login":
      centerContent = <Login />;
      showSharedButton = false;
      break;
    case "otp":
      centerContent = <OTPScreen />;
      break;
    case "about-your-self":
      centerContent = <AboutYourSelf />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticated"
          defaultMessage="Continue"
        />
      );
      break;
    case "language-selection":
    default:
      centerContent = <LanguageSelection />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticated"
          defaultMessage="Continue"
        />
      );
      break;
  }

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.topContent}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.centerContent}>{centerContent}</div>
      <div className={styles.bottomContent}>
        {currentPage === "otp" ? (
          <>
            <SharedButton
              text="Confirm"
              withIcon={false}
              onClick={handleContinue}
            />
            <SharedButton
              text="I didn't receive a code"
              withIcon={false}
              textColor="gray"
              backgroundColor="transparent"
            />
          </>
        ) : (
          showSharedButton && (
            <SharedButton
              text={sharedButtonText}
              withIcon={currentPage === "language-selection"}
              onClick={handleContinue}
            />
          )
        )}
      </div>
    </div>
  );
};

export default WrapperContent;
