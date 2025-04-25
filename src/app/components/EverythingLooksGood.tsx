import React from "react";
import Title from "../shared/Title";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { usePrivy } from "@privy-io/react-auth";
import { Locale, useI18n } from "../../i18n";
import { FormattedMessage } from "react-intl";

const EveryThingLooksGood: React.FC = () => {
  const { user } = usePrivy();
  const { locale, setLocale } = useI18n();

  const handleChange = (event: SelectChangeEvent) => {
    setLocale(event.target.value as Locale);
  };

  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="everythingLooksGood.mainText"
            defaultMessage="Everything looks"
          />
        }
        highlightText={
          <FormattedMessage
            id="everythingLooksGood.highlightText"
            defaultMessage="good?"
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
            id="outlined-required"
            label={
              <FormattedMessage id="user.nameLabel" defaultMessage="Name" />
            }
            value={user?.google?.name}
          />
        </div>
        <div>
          <TextField
            fullWidth
            required
            id="outlined-disabled"
            label={<FormattedMessage id="user.email" defaultMessage="Email" />}
            type="email"
            value={user?.google?.email}
          />
        </div>
        <FormControl sx={{ marginTop: "15px" }} fullWidth>
          <InputLabel id="language-label">
            <FormattedMessage id="language" defaultMessage="Language" />
          </InputLabel>
          <Select
            fullWidth
            labelId="language-label"
            id="language-select"
            value={locale}
            label={<FormattedMessage id="language" defaultMessage="Language" />}
            onChange={handleChange}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="fr">Français</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default EveryThingLooksGood;
