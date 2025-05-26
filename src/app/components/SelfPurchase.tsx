import React from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

const SelfPurchase: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="selfPurchase.mainText"
            defaultMessage="What's your"
          />
        }
        highlightText={
          <FormattedMessage
            id="selfPurchase.highlightText"
            defaultMessage="full name?"
          />
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
            label={
              <FormattedMessage id="user.fullName" defaultMessage="Full name" />
            }
          />
        </div>
      </Box>
    </>
  );
};

export default SelfPurchase;
