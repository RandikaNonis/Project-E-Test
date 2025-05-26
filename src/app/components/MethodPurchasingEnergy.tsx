import React from "react";
import Title from "../shared/Title";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormattedMessage } from "react-intl";

const MethodPurchasingEnergy: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="methodPurchasingEnergy.mainText"
            defaultMessage="What's your"
          />
        }
        highlightText={
          <FormattedMessage
            id="methodPurchasingEnergy.highlightText"
            defaultMessage="method of purchasing energy?"
          />
        }
        highlightTextColor={"#0083C6"}
      />
      <FormControl sx={{ marginTop: "15px" }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="selfPurchase"
            control={<Radio />}
            label={<FormattedMessage
            id="methodPurchasingEnergy.mainText"
            defaultMessage="What's your"
          />}
          />
          <FormControlLabel
            value="authorizeAgent"
            control={<Radio />}
            label="Through an authorised agent"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default MethodPurchasingEnergy;
