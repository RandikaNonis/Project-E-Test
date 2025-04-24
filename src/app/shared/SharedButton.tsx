import React from "react";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

interface SharedButtonProps {
  onClick?: () => void;
  text: string;
  withIcon: boolean;
}

const SharedButton: React.FC<SharedButtonProps> = ({
  onClick,
  text,
  withIcon,
}) => {
  const buttonStyles = {
    backgroundColor: "#1976D2",
    borderRadius: "5px",
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
