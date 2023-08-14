import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect } from "react";

const CartDrawer = ({ open, onClose }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [amount, setAmount] = React.useState(1);

  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    const storedItems = storedData ? JSON.parse(storedData) : [];
    setCartItems(storedItems);
  }, []);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <Box>
      <SwipeableDrawer anchor="top" open={open} onClose={onClose}>
        <Box sx={{ padding: "25px" }}>
          {/* here */}

          <Container maxWidth="lg">
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{ marginRight: "10px", marginY: "7px" }}
                onClick={onClose}
                variant="outlined"
              >
                <ArrowBackIcon />
              </Button>
              <Typography sx={{ paddingY: "10px" }} variant="h4">
                Shopping Cart
              </Typography>
            </Box>
            <Grid container alignItems={"flex-start"}>
              <Grid key={""} item xs={8}>
                {/* <Box sx={{ paddingY: "16px" }}>
                  <Button onClick={onClose} variant="outlined">
                    <ArrowBackIcon />
                  </Button>
                  <Typography sx={{ paddingY: "10px" }} variant="h4">
                    Shopping Cart
                  </Typography>
                </Box> */}
                {/* Im back mafucka */}
                {cartItems ? (
                  cartItems.map((item) => (
                    <Paper variant="outlined" sx={{ marginY: "10px" }}>
                      <Box key={item.id}>
                        <Grid container spacing={1} marginY="10px">
                          <Grid item xs={2}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                src={item.image}
                                style={{
                                  width: "90px",
                                  height: "90px",
                                  objectFit: "contain",
                                  padding: 10,
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={2} sx={{ margin: "7px" }}>
                            <Box
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {item.title}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={2} sx={{ margin: "7px" }}>
                            <Box>
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                ${item.price}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={2} sx={{ margin: "7px" }}>
                            <Box
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
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
                          </Grid>
                          <Grid item xs={2} sx={{ margin: "7px" }}>
                            <Box
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <IconButton>
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </Grid>
                        </Grid>
                        {/* <Divider
                          sx={{
                            marginY: "20px",
                            width: "50%",
                            marginLeft: "25%",
                          }}
                        /> */}
                      </Box>
                    </Paper>
                  ))
                ) : (
                  <Box>
                    <Typography>empthy</Typography>
                  </Box>
                )}
              </Grid>
              <Grid item xs={4} sx={{ padding: "10px" }}>
                <Box position={"fixed"}>
                  <Paper
                    sx={{ width: "350px", height: "150px", padding: "20px" }}
                    variant="outlined"
                    square
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1">Subtotal:</Typography>
                      <Typography variant="body1">(1) Items</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingY: "8px",
                      }}
                    >
                      <Typography variant="body1">Price:</Typography>
                      <Typography variant="body1">$49.99</Typography>
                    </Box>
                    <Divider sx={{ marginY: "8px" }} />
                    <Box>
                      <Button
                        onClick={() => console.log(cartItems)}
                        variant="contained"
                        fullWidth
                      >
                        <Typography textTransform="none">
                          Proceed to Checkout
                        </Typography>
                      </Button>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default CartDrawer;
