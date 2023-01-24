import React from "react";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.200",
        color: "#848A92",
        width: 150,
        height: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 2,
        boxSizing: "border-box",
      }}
    >
      LOGO
    </Box>
  );
};

export default Logo;
