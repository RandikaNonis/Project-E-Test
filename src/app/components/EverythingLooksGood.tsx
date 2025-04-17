import React from "react";
import Title from "../shared/Title";
import { Box, TextField } from "@mui/material";
import { usePrivy } from "@privy-io/react-auth";

const EveryThingLooksGood: React.FC = () => {
  const { user } = usePrivy();

  return (
    <>
      <Title
        mainText={"Everything looks"}
        highlightText={" good?"}
        highlightTextColor={"#E92A35"}
      />
      <Box
        component="form"
        sx={{
          marginTop: "15px",
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
            value={user?.google?.name}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-disabled"
            label="Email"
            type="email"
            value={user?.google?.email}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-disabled"
            label="Language"
            value={"English"}
          />
        </div>
      </Box>
    </>
  );
};

export default EveryThingLooksGood;
