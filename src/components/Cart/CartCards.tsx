import { Image } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const CartCard = ({
  title,
  quantity,
  details,
  setProducts,
  removeItem,
  editQuantity,
}: any) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", width: "10%" }}>Image</Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography>{title}</Typography>
        <Typography>{quantity}</Typography>
        {/* <Typography>{details}</Typography> */}
      </Box>
    </Box>
  );
};

export default CartCard;
