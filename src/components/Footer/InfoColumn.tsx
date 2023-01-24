import React from "react";
import { Box, Link, Typography } from "@mui/material";

const InfoColumn = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>
      {links.map((link) => (
        <Link underline="none" href="/">
          <Typography>{link}</Typography>
        </Link>
      ))}
    </Box>
  );
};

export default InfoColumn;
