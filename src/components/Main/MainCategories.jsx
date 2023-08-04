import React from "react";
import { Box, Container, Grid } from "@mui/material";

const MainCategories = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "30px" }}>
      {/* <Typography
        variant="h6"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Categories
      </Typography> */}
      <Grid container sx={{ marginTop: "20px" }}>
        {categories.map((category) => (
          <Grid
            key={category}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            item
            xs={3}
          >
            <Box>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
                src={category}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainCategories;

const categories = [
  "../../../images/silver-smartphone-front-side-white-background_187299-20187.jpg",
  "../../../images/beauty-model-girl-face-portrait-beautiful-woman-touching-face-enjoy-perfect-skin_394555-801.jpg",
  "../../../images/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing.jpg",
  "../../../images/front-view-armchair-plant-3d-rendering_252032-366-removebg-preview.png",
];
