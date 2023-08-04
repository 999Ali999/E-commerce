import { Box, Container } from "@mui/material";
import React from "react";
import MainCarousel from "./MainCarousel";
import MainCategories from "./MainCategories";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ marginTop: "90px", width: "100%" }}>
        <MainCarousel />
        <MainCategories />
      </Box>
    </Container>
  );
};

export default Main;
