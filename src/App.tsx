import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import SearchAppBar from "./components/Navigation/SearchAppBar";
import ButtonBar from "./components/Navigation/ButtonBar";
import Cart from "./components/Cart/Cart";
import useStore from "./utils/hooks/useStore";
import { buttonNames } from "./utils/constants";

function App() {
  const { editQuantity, removeItem, items} = useStore();

  return (
    <>
      <SearchAppBar />
      <ButtonBar buttonNames={buttonNames} />
      <Container>
        <Cart
          products={items}
          removeItem={removeItem}
          editQuantity={editQuantity}
        />
      </Container>
    </>
  );
}

export default App;
