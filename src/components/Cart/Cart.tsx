import React from "react";
import { Box, Typography } from "@mui/material";
import CartCard from "./CartCard";

const Cart: any = ({
  products,
  setProducts,
  removeItem,
  editQuantity,
}: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>Your Cart</Typography>
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
};

export default Cart;
