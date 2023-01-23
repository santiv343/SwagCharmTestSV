import { DeleteForeverOutlined, Image } from "@mui/icons-material";
import { Box, Button, NativeSelect, Typography } from "@mui/material";
import React from "react";
import { getStockOptions } from "../../utils/cartHelpers";

const CartCard = ({ product, removeItem, editQuantity }: any) => {
  const { title, price, quantity, details, id, stockAvaliable, img } = product;

  console.log({ img });

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        borderBottom: 1,
        borderBottomColor: "secondary.main",
        py: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "15%",
          aspectRatio: "1/1",
          maxWidth: 120,
        }}
      >
        <img src={img} style={{ width: "100%", objectFit: "cover" }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            <b>{title}</b>
          </Typography>
          <Typography>$ {price.toFixed(2)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mr: 1 }}>
              <b>Quantity:</b>
            </Typography>
            <NativeSelect
              sx={{ fontWeight: "bold" }}
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
          <Button
            onClick={() => removeItem(id)}
            startIcon={<DeleteForeverOutlined />}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: 12,
              mt: 1,
            }}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCard;
