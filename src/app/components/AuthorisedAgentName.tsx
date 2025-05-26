  import React from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

const AuthorisedAgentName: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="authorisedAgentName.mainText"
            defaultMessage="What's your"
          />
        }
        highlightText={
          <FormattedMessage
            id="authorisedAgentName.highlightText"
            defaultMessage="authorized agent's name?"
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
            label={<FormattedMessage id="authorisedAgent.name" defaultMessage="Agent's name" />}
          />
        </div>
      </Box>
    </>
  );
};

export default AuthorisedAgentName;