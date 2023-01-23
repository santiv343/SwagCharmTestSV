import { Image } from "@mui/icons-material";
import { Box, Button, NativeSelect, Typography } from "@mui/material";
import React from "react";
import { getStockOptions } from "../../utils/cartHelpers";

const CartCard = ({ product, removeItem, editQuantity }: any) => {
  const { title, price, quantity, details, id, stockAvaliable } = product;

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", width: "10%" }}>Image</Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>{title}</Typography>
          <Typography>$ {price.toFixed(2)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography>Quantity: </Typography>
            <NativeSelect
              defaultValue={quantity}
              onChange={(e) => editQuantity(id, e.target.value)}
              inputProps={{
                name: "quantity",
                id: "uncontrolled-native",
              }}
            >
              {getStockOptions(stockAvaliable)}
            </NativeSelect>
          </Box>
          <Typography>Total: $ {(price * quantity).toFixed(2)}</Typography>
        </Box>
        {/* <Typography>{details}</Typography> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Button onClick={() => removeItem(id)}>Remove</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCard;
