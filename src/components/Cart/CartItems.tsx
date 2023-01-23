import React from "react";
import { Box, Typography } from "@mui/material";
import CartCard from "./CartCard";

export default function CartItems({
  products,
  removeItem,
  editQuantity,
  productCount,
}: any) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gridArea: "cartItems" }}
    >
      <Typography>Your Cart {`(${productCount})`}</Typography>
      <Box>
        {products.map((product: any) => (
          <CartCard
            product={product}
            removeItem={removeItem}
            editQuantity={editQuantity}
          />
        ))}
      </Box>
    </Box>
  );
}
