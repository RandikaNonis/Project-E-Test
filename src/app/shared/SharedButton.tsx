import React from "react";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

interface SharedButtonProps {
  onClick?: () => void;
  text: React.ReactNode;
  withIcon: boolean;
  backgroundColor?: string;
  textColor?: string;
  border?: string;
}

const SharedButton: React.FC<SharedButtonProps> = ({
  onClick,
  text,
  withIcon,
  backgroundColor,
  textColor,
  border,
}) => {
  const buttonStyles = {
    backgroundColor: backgroundColor ?? "#1976D2",
    border: border ?? "5px",
    color: textColor ?? "white",
    marginBottom: "1rem",
    textTransform: "none"
  };

  return (
    <Button
      fullWidth
      onClick={onClick}
      sx={buttonStyles}
      variant="contained"
      size="medium"
      endIcon={withIcon ? <ArrowForward /> : undefined}
    >
      {text}
    </Button>
  );
};

export default SharedButton;
