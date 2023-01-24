import React from "react";
import { Box } from "@mui/material";
import CartItems from "./CartItems";
import CheckoutCTA from "./CheckoutCTA";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { featuredProducts } from "../../utils/constants";
import { StorePropsType } from "../../utils/hooks/useStore";

const Cart = ({ total, items, removeItem, editQuantity }: StorePropsType) => {
  const productCount = items.length;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 2,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"cartItems cartItems cartItems checkoutCTA"
                            "featuredProducts featuredProducts featuredProducts featuredProducts"`,
      }}
    >
      <CartItems
        items={items}
        removeItem={removeItem}
        editQuantity={editQuantity}
        productCount={productCount}
      />

      <CheckoutCTA productCount={productCount} total={total} />

      <FeaturedProducts products={featuredProducts} />
    </Box>
  );
};

export default Cart;
