import React from "react";
import Title from "../shared/Title";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

const ServiceAddress: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="serviceAddress.mainText"
            defaultMessage="What's your"
          />
        }
        highlightText={
          <FormattedMessage
            id="serviceAddress.highlightText"
            defaultMessage="service address?"
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
        <FormControlLabel
          control={<Checkbox />}
          label={
            <FormattedMessage
              id="serviceAddress.checkBox"
              defaultMessage="Use my billing address as service address."
            />
          }
        />
        <div>
          <TextField
            fullWidth
            required
            label={
              <FormattedMessage
                id="user.serviceAddress"
                defaultMessage="Service address"
              />
            }
          />
        </div>
      </Box>
    </>
  );
};

export default ServiceAddress;
