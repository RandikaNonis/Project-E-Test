import React from "react";
import styles from "../styles/WrapperContent.module.css";
import LanguageSelection, { Locale } from "./LanguageSelection";
import SharedButton from "../shared/SharedButton";
import logo from "../../assets/Logo.png";
// import { useNavigate } from "react-router-dom";
// import { usePrivy } from "@privy-io/react-auth";
import EveryThingLooksGood from "./EverythingLooksGood";
import { FormattedMessage } from "react-intl";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setCurrentPage } from "../../store/slices/pageSlice";
import OTPScreen from "./OTPScreen";
import AboutYourSelf from "./AboutYourSelf";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useI18n } from "../../i18n";
import ZipCode from "./ZipCode";
import BillingAddress from "./BillingAddress";
import ServiceAddress from "./ServiceAddress";
import MethodPurchasingEnergy from "./MethodPurchasingEnergy";
import SelfPurchase from "./SelfPurchase";
import AuthorisedAgentName from "./AuthorisedAgentName";
import AuthorisedAgentNumber from "./AuthorisedAgentNumber";
import SecurityQuestion from "./SecurityQuestion";

const WrapperContent: React.FC = () => {
  const userDetails = useSelector((state: RootState) => state.user.userInfo);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.page.currentPage);

  const { locale, setLocale } = useI18n();

  const handleChange = (event: SelectChangeEvent) => {
    setLocale(event.target.value as Locale);
  };

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
      dispatch(setCurrentPage("zip-code"));
    } else if (currentPage === "zip-code") {
      dispatch(setCurrentPage("billing-address"));
    } else if (currentPage === "billing-address") {
      dispatch(setCurrentPage("service-address"));
    } else if (currentPage === "service-address") {
      dispatch(setCurrentPage("method-purchasing-energy"));
    } else if (currentPage === "method-purchasing-energy") {
      dispatch(setCurrentPage("self-purchase"));
    } else if (currentPage === "self-purchase") {
      dispatch(setCurrentPage("authorised-agent-name"));
    } else if (currentPage === "authorised-agent-name") {
      dispatch(setCurrentPage("authorised-agent-number"));
    } else if (currentPage === "authorised-agent-number") {
      dispatch(setCurrentPage("security-question"));
    }
    // if (
    //   userDetails?.name &&
    //   userDetails?.email &&
    //   userDetails?.mobileNumber
    // ) {
    //   sessionStorage.setItem("userInfo", JSON.stringify(userDetails));
    //   navigate("/");
    // }
  };

  const handleBack = () => {
    if (currentPage === "security-question") {
      dispatch(setCurrentPage("authorised-agent-number"));
    } else if (currentPage === "authorised-agent-number") {
      dispatch(setCurrentPage("authorised-agent-name"));
    } else if (currentPage === "authorised-agent-name") {
      dispatch(setCurrentPage("self-purchase"));
    } else if (currentPage === "self-purchase") {
      dispatch(setCurrentPage("method-purchasing-energy"));
    } else if (currentPage === "method-purchasing-energy") {
      dispatch(setCurrentPage("service-address"));
    } else if (currentPage === "service-address") {
      dispatch(setCurrentPage("billing-code"));
    } else if (currentPage === "billing-address") {
      dispatch(setCurrentPage("zip-code"));
    } else if (currentPage === "zip-code") {
      dispatch(setCurrentPage("everything-looks-good"));
    } else if (currentPage === "everything-looks-good") {
      dispatch(setCurrentPage("about-your-self"));
    } else if (currentPage === "about-your-self") {
      dispatch(setCurrentPage("otp"));
    } else if (currentPage === "otp") {
      dispatch(setCurrentPage("login"));
    } else if (currentPage === "login") {
      dispatch(setCurrentPage("language-selection"));
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
    case "zip-code":
      centerContent = <ZipCode />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticmated"
          defaultMessage="Continue"
        />
      );
      break;
    case "billing-address":
      centerContent = <BillingAddress />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticmated"
          defaultMessage="Continue"
        />
      );
      break;
    case "service-address":
      centerContent = <ServiceAddress />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticmated"
          defaultMessage="Continue"
        />
      );
      break;
    case "method-purchasing-energy":
      centerContent = <MethodPurchasingEnergy />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticmated"
          defaultMessage="Continue"
        />
      );
      break;
    case "self-purchase":
      centerContent = <SelfPurchase />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticmated"
          defaultMessage="Continue"
        />
      );
      break;
    case "authorised-agent-name":
      centerContent = <AuthorisedAgentName />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticmated"
          defaultMessage="Continue"
        />
      );
      break;
    case "authorised-agent-number":
      centerContent = <AuthorisedAgentNumber />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticmated"
          defaultMessage="Continue"
        />
      );
      break;
    case "security-question":
      centerContent = <SecurityQuestion />;
      showSharedButton = true;
      sharedButtonText = (
        <FormattedMessage
          id="sharedButton.unAuthenticmated"
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
      <div
        className={`${styles.topContent} ${
          currentPage === "language-selection" ? styles.noFlex : ""
        }`}
      >
        {currentPage !== "language-selection" && (
          <Button startIcon={<ArrowBack />} onClick={handleBack}>
            Back
          </Button>
        )}
        <img src={logo} alt="logo" className={styles.logo} />
        {currentPage !== "language-selection" && (
          <FormControl size="small">
            <InputLabel id="language-label">
              <FormattedMessage id={"language"} defaultMessage={"Language"} />
            </InputLabel>
            <Select
              autoWidth
              labelId="language-label"
              id="language-select"
              value={locale}
              label="Language"
              onChange={handleChange}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
              <MenuItem value="fr">Français</MenuItem>
            </Select>
          </FormControl>
        )}
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
