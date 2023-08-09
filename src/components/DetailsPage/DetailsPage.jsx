import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import CartDrawer from "../CartPage/CartDrawer";

const DetailsPage = () => {
  const [drawer, setDrawer] = React.useState(false);

  const [products, setProducts] = useState(null);

  const [amount, setAmount] = React.useState(1);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", marginTop: "90px", padding: "24px" }}>
        <Header onClick={toggleDrawer} />

        <Box>
          <CartDrawer open={drawer} onClose={() => setDrawer(false)} />
        </Box>

        {products ? (
          <Grid container>
            <Grid container item xs={9}>
              <Grid item xs={6}>
                <Paper variant="outlined" square>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={products.image}
                      style={{
                        width: "461px",
                        height: "461px",
                        objectFit: "contain",
                        padding: 20,
                      }}
                    />
                  </Box>
                </Paper>
              </Grid>
              <Grid item sx={{ p: 2 }} xs={6}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h6">{products.title}</Typography>
                </Box>
                <Divider sx={{ marginY: "20px" }} />
                <Box
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography>{products.rating.rate}</Typography>
                  <Rating
                    name="read-only"
                    value={products.rating.rate}
                    readOnly
                    precision={0.5}
                  />

                  <Typography textTransform="none" variant="button">
                    {products.rating.count} Reviews
                  </Typography>
                </Box>
                <Divider sx={{ marginY: "20px" }} />
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Typography variant="body1">
                    Price: ${products.price}
                  </Typography>
                </Box>
                <Divider sx={{ marginY: "20px" }} />
                <Box>
                  <Typography variant="body1">About this item:</Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="body2">
                    {products.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box>
                <Paper
                  sx={{ width: "250px", height: "240px", padding: "20px" }}
                  variant="outlined"
                  square
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2">Price:</Typography>
                    <Typography variant="body2">${products.price}</Typography>
                  </Box>
                  <Divider sx={{ marginY: "10px" }} />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2">Status:</Typography>
                    <Typography variant="body2">Available</Typography>
                  </Box>
                  <Divider sx={{ marginY: "10px" }} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Amount</Typography>
                    <FormControl
                      variant="outlined"
                      sx={{ paddingBottom: "2px" }}
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder="Amount"
                        value={amount}
                        onChange={handleChange}
                        size="small"
                        sx={{ width: "80px" }}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Divider sx={{ marginY: "10px" }} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => addToCart(product)}
                    >
                      <Typography textTransform="none">Add to Cart</Typography>
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default DetailsPage;
