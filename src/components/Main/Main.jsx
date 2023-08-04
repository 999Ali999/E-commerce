import { Box, Container } from "@mui/material";
import React from "react";
import MainCarousel from "./MainCarousel";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ marginTop: "90px" }}>
        <MainCarousel />
      </Box>
    </Container>
  );
};

export default Main;
