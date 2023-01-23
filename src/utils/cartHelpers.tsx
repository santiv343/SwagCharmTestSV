import React from "react";

export const getStockOptions = (stockAvaliable: any) => {
  let options: any = [];
  for (let i = 1; i <= stockAvaliable; i++) {
    options.push(<option value={i}>{i}</option>);
  }
  return options;
};

export const getTotalPrice = (items: any) => {
  return items.reduce((acc: any, item: any) => {
    return acc + item.quantity * item.price;
  }, 0);
};
