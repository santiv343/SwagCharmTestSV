import { Box, Typography } from "@mui/material";
import React from "react";

const FeaturedProduct = ({ product }: any) => {
  const { title, priceRange, minimum } = product;

  return (
    <Box>
      <Box
        sx={{ bgcolor: "secondary.main", width: "100%", aspectRatio: "1/1" }}
      ></Box>
      <Typography>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          noWrap
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "start",
          }}
        >
          {priceRange}
        </Typography>
        <Typography
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Minimum: {minimum}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturedProduct;
