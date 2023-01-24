import React from "react";
import { Button, Container, Box } from "@mui/material";

const ButtonBar = ({ buttonNames }: any) => {
  return (
    <Box sx={{ bgcolor: "secondary.main" }}>
      <Container>
        {buttonNames.map((text: any, index: number) => (
          <Button
            key={"barButton" + index}
            variant="text"
            sx={{ textTransform: "none", py: 2, color: "#535C67" }}
          >
            {text}
          </Button>
        ))}
      </Container>
    </Box>
  );
};

export default ButtonBar;
