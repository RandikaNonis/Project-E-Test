import React from "react";
import styles from "../styles/WrapperContent.module.css";
import LanguageSelection from "./LanguageSelection";
import SharedButton from "../shared/SharedButton";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import EveryThingLooksGood from "./EverythingLooksGood";

const WrapperContent: React.FC = () => {
  const navigate = useNavigate();
  const { authenticated } = usePrivy();

  const handleContinue = () => {
    if (authenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.topContent}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.centerContent}>
        {authenticated ? <EveryThingLooksGood /> : <LanguageSelection />}
      </div>
      <div className={styles.bottomContent}>
        <SharedButton
          text={authenticated ? "Yes, looks good" : "Continue"}
          withIcon={!authenticated}
          onClick={handleContinue}
        />
      </div>
    </div>
  );
};

export default WrapperContent;
