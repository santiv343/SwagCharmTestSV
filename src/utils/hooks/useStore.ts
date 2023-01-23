import React, { useEffect, useState } from "react";
import { getTotalPrice } from "../cartHelpers";
import { initialProducts } from "../constants";

const useStore = () => {
  const [items, setItems] = useState(initialProducts);
  const [total, setTotal] = useState(getTotalPrice(items));

  useEffect(() => {
    setTotal(getTotalPrice(items));
  }, [items]);

  const removeItem = (id: any) => {
    const actualProduct = items.find((item) => item.id === id);

    if (actualProduct)
      setItems(items.filter((item) => actualProduct.id !== item.id));
  };

  const editQuantity = (id: any, quantity: any) => {
    const editedItems = items.map((item) => {
      if (id === item.id) {
        item.quantity = quantity;
      }
      return item;
    });

    setItems(editedItems);

    // const actualProductIndex = items.findIndex((item) => item.id === id);

    // console.log({ actualProductIndex });

    // if (actualProductIndex !== -1) {

    //   const editedProduct = {
    //     ...items[actualProductIndex],
    //     quantity: quantity,
    //     stockAvaliable: items[actualProductIndex].stockAvaliable - quantity,
    //   };

    //   setItems([...items, (items[actualProductIndex] = editedProduct)]);
    // }
  };

  return {
    editQuantity,
    removeItem,
    items,
    total,
  };
};

export default useStore;
