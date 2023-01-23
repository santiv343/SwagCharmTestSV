import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = ({ products }: any) => {
  return (
    <>
      <Box
        sx={{
          gridArea: "featuredProducts",
        }}
      >
        <Typography>You might also like</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
          }}
        >
          {products.map((product: any) => (
            <FeaturedProduct product={product} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FeaturedProducts;
