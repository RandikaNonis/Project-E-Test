import React from "react";
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
import { setCurrentPage } from "../../store/slices/pageSlice";
import OTPScreen from "./OTPScreen";
import AboutYourSelf from "./AboutYourSelf";

const WrapperContent: React.FC = () => {
  const userDetails = useSelector((state: RootState) => state.user.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.page.currentPage);

  const handleContinue = () => {
    if (currentPage === "language-selection") {
      dispatch(setCurrentPage("login"));
    } else if (currentPage === "otp") {
      dispatch(setCurrentPage("about-your-self"));
    } else if (currentPage === "about-your-self") {
      if (userDetails?.name && userDetails?.email) {
        dispatch(setCurrentPage("everything-looks-good"));
      }
    } else if (currentPage === "everything-looks-good") {
      if (
        userDetails?.name &&
        userDetails?.email &&
        userDetails?.mobileNumber
      ) {
        sessionStorage.setItem("userInfo", JSON.stringify(userDetails));
        navigate("/");
      }
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
