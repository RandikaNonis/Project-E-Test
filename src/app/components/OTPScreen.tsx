import React from "react";
import Title from "../shared/Title";
import { FormattedMessage } from "react-intl";
import { MuiOtpInput } from "mui-one-time-password-input";
import styles from "../styles/OTPScreen.module.css";

const OTPScreen: React.FC = () => {
  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue: React.SetStateAction<string>) => {
    setOtp(newValue);
  };

  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id={"otp.mainText"}
            defaultMessage={"Verify your"}
          />
        }
        highlightText={
          <FormattedMessage
            id={"otp.highlightText"}
            defaultMessage={"number?"}
          />
        }
        highlightTextColor={"#0083C6"}
      />
      <div className={styles.wrapper}>
        <p>Enter the OTP sent to *****6543.</p>
        <MuiOtpInput
          value={otp}
          onChange={handleChange}
          length={5}
          TextFieldsProps={{ size: "small" }}
        />
      </div>
    </>
  );
};

export default OTPScreen;
