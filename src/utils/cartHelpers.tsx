import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { ProductsType } from "./constants";

export const getStockOptions = (stockAvaliable: number) => {
  let options: any = [];
  for (let i = 1; i <= stockAvaliable; i++) {
    options.push(<option value={i}>{i}</option>);
  }
  return options;
};

export const getTotalPrice = (items: ProductsType) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
};

export const renderDetails = (details: { [key: string]: string }[]) => {
  const detailsList = details.map((detail) => {
    const propName = Object.getOwnPropertyNames(detail)[0];
    return (
      <ListItem sx={{ p: 0 }}>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
              mr: 1,
              fontSize: 14,
            }}
          >
            {propName}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: "secondary.200",
              alignItems: "center",
              display: "flex",
            }}
          >
            ({detail[propName]})
          </Typography>
        </Box>
      </ListItem>
    );
  });

  return (
    <List
      sx={{
        listStyleType: "disc",
        pl: 2,
        "& .MuiListItem-root": {
          display: "list-item",
        },
      }}
    >
      {detailsList}
    </List>
  );
};
