import "./App.css";
import { Container, Typography } from "@mui/material";
import SearchAppBar from "./components/Navigation/SearchAppBar";
// import PrimarySearchAppBar from "./components/Navigation/MainNavigation";

function App() {
  return (
    <>
      <SearchAppBar />
      <Container>
        <Typography variant="h1" sx={{ color: "primary.300" }}>
          ASDASDASD
        </Typography>
      </Container>
    </>
  );
}

export default App;
