import { useEffect, useState } from "react";
import { getTotalPrice } from "../cartHelpers";
import { initialProducts, ProductsType } from "../constants";

export type StorePropsType = {
  editQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  items: ProductsType;
  total: number;
};

const useStore = (): StorePropsType => {
  const [items, setItems] = useState(initialProducts);
  const [total, setTotal] = useState(getTotalPrice(items));

  useEffect(() => {
    setTotal(getTotalPrice(items));
  }, [items]);

  const removeItem = (id: number) => {
    const actualProduct = items.find((item) => item.id === id);

    if (actualProduct)
      setItems(items.filter((item) => actualProduct.id !== item.id));
  };

  const editQuantity = (id: number, quantity: number) => {
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
