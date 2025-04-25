import React from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

const AboutYourSelf: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="aboutYourSelf.mainText"
            defaultMessage="Tell us about"
          />
        }
        highlightText={
          <FormattedMessage
            id="aboutYourSelf.highlightText"
            defaultMessage="Yourself?"
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
            id="outlined-required"
            label={
              <FormattedMessage id="user.nameLabel" defaultMessage="Name" />
            }
          />
        </div>
        <div>
          <TextField
            fullWidth
            required
            id="outlined-disabled"
            label={<FormattedMessage id="user.email" defaultMessage="Email" />}
            type="email"
          />
        </div>
      </Box>
    </>
  );
};

export default AboutYourSelf;
