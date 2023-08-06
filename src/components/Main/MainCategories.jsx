import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const MainCategories = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "26px",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
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
                src={category.image}
                loading="lazy"
              />
              <Typography
                variant="subtitle2"
                sx={{
                  display: "flex",
                  cursor: "pointer",
                  justifyContent: "center",
                  "&:hover": {
                    transform: "scale(1.05)",
                    textDecorationLine: "underline",
                  },
                }}
              >
                {category.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainCategories;

const categories = [
  {
    title: "Electronic Devices",
    image:
      "../../../images/silver-smartphone-front-side-white-background_187299-20187.jpg",
  },
  {
    title: "Health and Beauty",
    image:
      "../../../images/beauty-model-girl-face-portrait-beautiful-woman-touching-face-enjoy-perfect-skin_394555-801.jpg",
  },
  {
    title: "Fashion and Style",
    image:
      "../../../images/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing.jpg",
  },
  {
    title: "Home Furniture",
    image:
      "../../../images/front-view-armchair-plant-3d-rendering_252032-366-removebg-preview.png",
  },
];
