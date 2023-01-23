import React, { useState } from "react";
import { initialProducts } from "../constants";

const useStore = () => {
  const [items, setItems] = useState(initialProducts);

  const removeItem = (item: any) => {
    const actualProduct = items.find(item);

    if (actualProduct) setItems(items.filter((item) => actualProduct !== item));
  };

  const editQuantity = (item: any, quantity: any) => {
    const actualProduct = items.findIndex(item);
    if (actualProduct !== -1)
      setItems([...items, (items[actualProduct].quantity = quantity)]);
  };

  return {
    editQuantity,
    removeItem,
    setItems,
    items,
  };
};

export default useStore;
