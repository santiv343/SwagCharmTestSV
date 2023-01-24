import React from "react";
import { Button, Container, Box } from "@mui/material";

const ButtonBar = ({ buttonNames }: { buttonNames: string[] }) => {
  return (
    <Box sx={{ bgcolor: "secondary.main" }}>
      <Container>
        {buttonNames.map((text, index: number) => (
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
