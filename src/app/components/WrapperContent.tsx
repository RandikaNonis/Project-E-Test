import React from "react";
import styles from "../styles/WrapperContent.module.css";
// import LanguageSelection from "./LanguageSelection";
import SharedButton from "../shared/SharedButton";
import logo from "../../assets/Logo.png";
// import { useNavigate } from "react-router-dom";
// import { usePrivy } from "@privy-io/react-auth";
// import EveryThingLooksGood from "./EverythingLooksGood";
// import { FormattedMessage } from "react-intl";
// import Login from "./Login";
import OTPScreen from "./otpScreen";

const WrapperContent: React.FC = () => {
  // const navigate = useNavigate();
  // const { authenticated } = usePrivy();

  // const handleContinue = () => {
  //   if (authenticated) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.topContent}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.centerContent}>
        {/* {authenticated ? <EveryThingLooksGood /> : <LanguageSelection />} */}
        {/* <Login/> */}
        <OTPScreen/>
      </div>
      <div className={styles.bottomContent}>
        {/* {authenticated ? (
          <SharedButton
            text={
              authenticated ? (
                <FormattedMessage
                  id={"sharedButton.authenticated"}
                  defaultMessage={"Yes, looks good"}
                />
              ) : (
                <FormattedMessage
                  id={"sharedButton.unAuthenticated"}
                  defaultMessage={"Continue"}
                />
              )
            }
            withIcon={!authenticated}
            onClick={handleContinue}
          />
        ) : (
          <></>
        )} */}
        <SharedButton text={"Confirm"} withIcon={false}/>
        <SharedButton text={"I didn't receive a code"} withIcon={false} textColor="gray" backgroundColor="transparent"/>
      </div>
    </div>
  );
};

export default WrapperContent;
