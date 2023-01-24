import { useEffect, useState } from "react";
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
  };

  return {
    editQuantity,
    removeItem,
    items,
    total,
  };
};

export default useStore;
