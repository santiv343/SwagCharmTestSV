import React from "react";
import { Box } from "@mui/material";
import CartItems from "./CartItems";
import CheckoutCTA from "./CheckoutCTA";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { featuredProducts } from "../../utils/constants";

const Cart: any = ({ total, products, removeItem, editQuantity }: any) => {
  const productCount = products.length;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"cartItems cartItems cartItems checkoutCTA"
                            "featuredProducts featuredProducts featuredProducts featuredProducts"`,
      }}
    >
      <CartItems
        products={products}
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
