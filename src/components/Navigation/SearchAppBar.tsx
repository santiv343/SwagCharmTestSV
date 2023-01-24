import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Person2Outlined } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Button, Container, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "white",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": {
      opacity: 1,
      color: "black",
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: { md: 0, lg: 0 },
            }}
          >
            <Box
              sx={{
                bgcolor: "secondary.200",
                color: "#848A92",
                width: 260,
                height: 48,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 2,
              }}
            >
              LOGO
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                ml: 6,
              }}
            >
              <Search
                sx={{
                  width: { sm: "40%", md: "60%", lg: "70%" },
                  display: "flex",
                }}
              >
                <SearchIconWrapper>
                  <SearchOutlinedIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search products"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box sx={{ display: "flex", gap: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  color="inherit"
                  aria-label="menu"
                  startIcon={
                    <Person2Outlined style={{ transform: "scale(1.5)" }} />
                  }
                  sx={{ textTransform: "none", whiteSpace: "nowrap" }}
                >
                  Sign in
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  color="inherit"
                  aria-label="menu"
                  startIcon={
                    <ShoppingBagOutlinedIcon
                      style={{ transform: "scale(1.5)" }}
                    />
                  }
                  sx={{ textTransform: "none", whiteSpace: "nowrap" }}
                >
                  Cart
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
