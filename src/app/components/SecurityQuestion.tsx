import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";
import Title from "../shared/Title";
import { FormattedMessage } from "react-intl";

const SecurityQuestion: React.FC = () => {
  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="securityQuestion.mainText"
            defaultMessage="What’s your"
          />
        }
        highlightText={
          <FormattedMessage
            id="securityQuestion.highlightText"
            defaultMessage="security question?"
          />
        }
        highlightTextColor={"#0083C6"}
      />
      <FormControl sx={{ marginTop: "15px" }} fullWidth>
        <InputLabel id="security-label">
          <FormattedMessage
            id={"securityQuestion"}
            defaultMessage={"Security question"}
          />
        </InputLabel>
        <Select
          fullWidth
          labelId="security-label"
          id="security-select"
          label={
            <FormattedMessage
              id={"securityQuestion"}
              defaultMessage={"Security question"}
            />
          }
        >
          <MenuItem value="one">
            <FormattedMessage
              id={"securityQuestion.optionOne"}
              defaultMessage={"Last four digits of SSN"}
            />
          </MenuItem>
          <MenuItem value="two">
            <FormattedMessage
              id={"securityQuestion.optionTwo"}
              defaultMessage={"Mother's maiden name"}
            />
          </MenuItem>
          <MenuItem value="three">
            <FormattedMessage
              id={"securityQuestion.optionThree"}
              defaultMessage={"City of birth"}
            />
          </MenuItem>
          <MenuItem value="four">
            <FormattedMessage
              id={"securityQuestion.optionFour"}
              defaultMessage={"Date of birth"}
            />
          </MenuItem>
          <MenuItem value="five">
            <FormattedMessage
              id={"securityQuestion.optionFive"}
              defaultMessage={"Driver's license number"}
            />
          </MenuItem>
          <MenuItem value="six">
            <FormattedMessage
              id={"securityQuestion.optionSix"}
              defaultMessage={"Government-issued ID number"}
            />
          </MenuItem>
        </Select>
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
              label={<FormattedMessage id="answer" defaultMessage="Answer" />}
            />
          </div>
        </Box>
      </FormControl>
    </>
  );
};

export default SecurityQuestion;
