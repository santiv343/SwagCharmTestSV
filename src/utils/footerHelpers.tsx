import React from "react";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { infoColumns } from "./constants";
import InfoColumn from "../components/Footer/InfoColumn";

const socialMediaIcons = [
  <FacebookRounded />,
  <Twitter />,
  <Instagram />,
  <LinkedIn />,
  <YouTube />,
];

export const getSocialMediaIconsWithBg = () => {
  return socialMediaIcons.map((icon) => (
    <IconButton
      sx={{ bgcolor: "#535C67", color: "white", width: 32, height: 32 }}
    >
      {icon}
    </IconButton>
  ));
};

export const getInfoColumns = () => {
  return infoColumns.map(({ title, links }: any) => (
    <InfoColumn title={title} links={links} />
  ));
};
