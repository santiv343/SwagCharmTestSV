import React from "react";
import { Box, Typography } from "@mui/material";
import CartCard from "./CartCard";
import { StorePropsType } from "../../utils/hooks/useStore";

export default function CartItems({
  items,
  removeItem,
  editQuantity,
  productCount,
}: Omit<StorePropsType, "total"> & { productCount: number }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gridArea: "cartItems",
        mt: 4,
      }}
    >
      <Typography variant="h6">
        <b>Your Cart </b>
        {`(${productCount})`}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {items.map((product, index: number) => (
          <CartCard
            key={"cartCard" + index}
            product={product}
            removeItem={removeItem}
            editQuantity={editQuantity}
          />
        ))}
      </Box>
    </Box>
  );
}
