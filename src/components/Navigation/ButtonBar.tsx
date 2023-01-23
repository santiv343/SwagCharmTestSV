import React from "react";
import { Button, Container, Box } from "@mui/material";

const ButtonBar = ({ buttonNames }: any) => {
  return (
    <Box sx={{ bgcolor: "secondary.main" }}>
      <Container>
        {buttonNames.map((text: any) => (
          <Button variant="text" sx={{ textTransform: "none" }}>
            {text}
          </Button>
        ))}
      </Container>
    </Box>
  );
};

export default ButtonBar;
