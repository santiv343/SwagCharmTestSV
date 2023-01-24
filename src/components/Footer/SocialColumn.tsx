import { Phone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { getSocialMediaIconsWithBg } from "../../utils/footerHelpers";
import Logo from "../Navigation/Logo";

const SocialColumn = () => {
  return (
    <Box sx={{ width: 264 }}>
      <Logo />
      <Typography sx={{ color: "secondary.300" }}>
        We sell custom products for all your needs. Packs and bulk products that
        you will enjoy.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
        <Phone />
        <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
          +1-202-555-0129
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 4 }}>
        {getSocialMediaIconsWithBg()}
      </Box>
    </Box>
  );
};

export default SocialColumn;
