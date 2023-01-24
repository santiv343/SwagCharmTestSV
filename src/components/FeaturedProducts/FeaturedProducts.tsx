import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = ({
  products,
}: {
  products: {
    title: string;
    priceRange: string;
    minimum: number;
  }[];
}) => {
  return (
    <>
      <Box
        sx={{
          gridArea: "featuredProducts",
          mt: 8,
        }}
      >
        <Typography sx={{ fontWeight: "bold", mb: 2 }} variant="h6">
          You might also like
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
          }}
        >
          {products.map((product, index: number) => (
            <FeaturedProduct
              key={"featuredProduct" + index}
              product={product}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FeaturedProducts;
