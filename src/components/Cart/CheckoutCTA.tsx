import { Box, Button, Typography } from "@mui/material";
import { borderBottom, borderBottomColor } from "@mui/system";
import React from "react";

const CheckoutCTA = ({ productCount, total }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gridArea: "checkoutCTA",
        mt: 4,
      }}
    >
      <Typography variant="h6">
        <b>Order summary</b>
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "secondary.300",
          py: 2,
          borderBottom: 1,
          borderBottomColor: "secondary.main",
        }}
      >
        <Typography>Number of items: </Typography>
        <Typography>{`${productCount}`}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "primary.main",
          py: 2,
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>Total:</Typography>
        <Typography sx={{ fontSize: 24 }}>
          <b>${total.toFixed(2)}</b>
        </Typography>
      </Box>
      <Button sx={{ textTransform: "none" }} variant="contained">
        Proceed to checkout
      </Button>
      <Button sx={{ mt: 2, textTransform: "none" }} variant="outlined">
        Continue shopping
      </Button>
    </Box>
  );
};

export default CheckoutCTA;
