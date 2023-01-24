import { DeleteForeverOutlined, Image } from "@mui/icons-material";
import { Box, Button, NativeSelect, Typography } from "@mui/material";
import React from "react";
import { getStockOptions, renderDetails } from "../../utils/cartHelpers";

const CartCard = ({ product, removeItem, editQuantity }: any) => {
  const { title, price, quantity, details, id, stockAvaliable, img, isPack } =
    product;

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
          flexDirection: "column",
          alignItems: "center",
          width: "15%",
          aspectRatio: "1/1",
          maxWidth: 120,
        }}
      >
        <img src={img} style={{ width: "100%", objectFit: "cover" }} />
        {isPack ? (
          <Box
            sx={{
              bgcolor: "secondary.main",
              width: "fit-content",
              textAlign: "center",
              mt: 1,
            }}
          >
            <Typography sx={{ fontSize: 10, p: "4px", color: "#848A92" }}>
              PACK
            </Typography>
          </Box>
        ) : null}
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
        {isPack ? <Typography>{renderDetails(details)}</Typography> : null}
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {isPack ? (
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 12,
                mt: 1,
                py: "2px",
                px: 2,
                borderRight: 1,
                borderRadius: 0,
              }}
            >
              Edit pack
            </Button>
          ) : null}
          <Button
            onClick={() => removeItem(id)}
            startIcon={<DeleteForeverOutlined />}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: 12,
              mt: 1,
              py: "2px",
              px: 2,
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
