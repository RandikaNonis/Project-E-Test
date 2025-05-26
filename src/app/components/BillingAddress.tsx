  import React from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

const BillingAddress: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="billingAddress.mainText"
            defaultMessage="What's your"
          />
        }
        highlightText={
          <FormattedMessage
            id="billingAddress.highlightText"
            defaultMessage="billing address?"
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
            label={<FormattedMessage id="user.billingAddress" defaultMessage="Billing address" />}
          />
        </div>
      </Box>
    </>
  );
};

export default BillingAddress;