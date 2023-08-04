import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainCard from "./MainCard";
import CircularProgress from "@mui/material/CircularProgress";

const MainProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    // console.log(products);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Grid container spacing={2}>
        {products ? (
          products.map((product) => (
            <Grid key={product.id} item xs={6} sm={4} md={2}>
              <MainCard
                image={product.image}
                title={product.title}
                price={product.price}
                key={product.id}
                reviews={product.rating.count}
                stars={product.rating.rate}
              />
            </Grid>
          ))
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default MainProducts;
