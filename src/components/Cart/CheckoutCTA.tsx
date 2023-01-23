import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CheckoutCTA = ({ productCount, total }: any) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gridArea: "checkoutCTA" }}
    >
      <Typography>Order summary</Typography>
      <Typography>Number of items: {`${productCount}`}</Typography>
      <Typography>
        Total: <b>${total.toFixed(2)}</b>
      </Typography>
      <Button variant="contained">Proceed to checkout</Button>
      <Button variant="outlined">Continue</Button>
    </Box>
  );
};

export default CheckoutCTA;
