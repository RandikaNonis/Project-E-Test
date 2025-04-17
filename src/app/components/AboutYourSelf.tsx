import React from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";

const AboutYourSelf: React.FC = () => {
  return (
    <>
      <Title
        mainText={"Tell us about"}
        highlightText={" Yourself?"}
        highlightTextColor={"#0083C6"}
      />
      <Box
        component="form"
        sx={{
            marginTop: '15px',
            "& .MuiTextField-root": {
              m: 1,
              width: "30ch",
              margin: "8px 0",
            },
          }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
          />
        </div>
        <div>
        <TextField
            required
            id="outlined-disabled"
            label="Email"
            type="email"
          />
        </div>
      </Box>
    </>
  );
};

export default AboutYourSelf;
