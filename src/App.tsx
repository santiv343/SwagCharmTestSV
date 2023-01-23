import React, { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import SearchAppBar from "./components/Navigation/SearchAppBar";
import ButtonBar from "./components/Navigation/ButtonBar";
import Cart from "./components/Cart/Cart";
import useStore from "./utils/hooks/useStore";
import { buttonNames } from "./utils/constants";

function App() {
  const { editQuantity, removeItem, items, setItems } = useStore();

  return (
    <>
      <SearchAppBar />
      <ButtonBar buttonNames={buttonNames} />
      <Container>
        <Cart
          products={items}
          setProducts={setItems}
          removeItem={removeItem}
          editQuantity={editQuantity}
        />
      </Container>
    </>
  );
}

export default App;
