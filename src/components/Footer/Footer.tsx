import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SocialColumn from "./SocialColumn";
import { infoColumns } from "../../utils/constants";
import { getInfoColumns } from "../../utils/footerHelpers";
import { ChevronLeftOutlined } from "@mui/icons-material";
import FlagIcon from "../FlagIcon";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 15,
        px: 11,
        py: 9,
        bgcolor: "secondary.main",
        display: "flex",
        width: "100%",
        height: "540px",
        boxSizing: "border-box",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <SocialColumn />
          </Box>
          <Box
            sx={{
              display: "flex",
              mx: 8,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {getInfoColumns()}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Typography>{`© 2022 Customer Products. All rights reserved.`}</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Region:</Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <FlagIcon />
                United States{" "}
                <ChevronLeftOutlined style={{ transform: "rotate(-90deg)" }} />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Lang:</Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                English{" "}
                <ChevronLeftOutlined style={{ transform: "rotate(-90deg)" }} />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
