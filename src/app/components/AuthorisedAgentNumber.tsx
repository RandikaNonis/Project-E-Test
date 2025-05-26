  import React from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

const AuthorisedAgentNumber: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="authorisedAgentNumber.mainText"
            defaultMessage="What's your"
          />
        }
        highlightText={
          <FormattedMessage
            id="authorisedAgentNumber.highlightText"
            defaultMessage="authorized agent's phone number?"
          />
        }
        highlightTextColor={"#E92A35"}
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
            label={<FormattedMessage id="authorisedAgent.number" defaultMessage="Agent's phone number" />}
          />
        </div>
      </Box>
    </>
  );
};

export default AuthorisedAgentNumber;