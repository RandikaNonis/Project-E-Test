  import React from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

const ZipCode: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="zipCode.mainText"
            defaultMessage="What's your"
          />
        }
        highlightText={
          <FormattedMessage
            id="zipCode.highlightText"
            defaultMessage="zip code?"
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
            label={<FormattedMessage id="user.zipCode" defaultMessage="Zip code" />}
          />
        </div>
      </Box>
    </>
  );
};

export default ZipCode;