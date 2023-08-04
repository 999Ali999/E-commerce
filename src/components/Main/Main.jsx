import { Box, Container } from "@mui/material";
import React from "react";
import MainCarousel from "./MainCarousel";
import MainCategories from "./MainCategories";
import MainProducts from "./MainProducts";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ marginTop: "90px", width: "100%" }}>
        <MainCarousel />
        <MainCategories />
        <MainProducts />
      </Box>
    </Container>
  );
};

export default Main;
