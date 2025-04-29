import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Title from "../shared/Title";
import { useI18n } from "../../i18n";
import { FormattedMessage } from "react-intl";

export type Locale = "en" | "fr" | "es";

const LanguageSelection: React.FC = () => {
  const { locale, setLocale } = useI18n();

  const handleChange = (event: SelectChangeEvent) => {
    setLocale(event.target.value as Locale);
  };

  return (
    <>
      <Title
        mainText={
          <FormattedMessage
            id="languageSelection.mainText"
            defaultMessage="What’s your preferred"
          />
        }
        highlightText={
          <FormattedMessage
            id="languageSelection.highlightText"
            defaultMessage="Language?"
          />
        }
        highlightTextColor={"#0083C6"}
      />
      <FormControl sx={{ marginTop: "15px" }} fullWidth>
        <InputLabel id="language-label">
          <FormattedMessage id={"language"} defaultMessage={"Language"} />
        </InputLabel>
        <Select
          fullWidth
          labelId="language-label"
          id="language-select"
          value={locale}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="fr">Français</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default LanguageSelection;
