import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { Box, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            item
            xs={3}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              To know us better
            </Typography>
            <Typography textTransform="none" variant="button">
              Job opportunities
            </Typography>
            <Typography textTransform="none" variant="button">
              Recycle
            </Typography>
            <Typography textTransform="none" variant="button">
              Accessibility
            </Typography>
            <Typography textTransform="none" variant="button">
              VAT and billing
            </Typography>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            item
            xs={3}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Need help?
            </Typography>
            <Typography textTransform="none" variant="button">
              View or track an order
            </Typography>
            <Typography textTransform="none" variant="button">
              About Happy Commerce
            </Typography>
            <Typography textTransform="none" variant="button">
              Happy Commerce Science
            </Typography>
            <Typography textTransform="none" variant="button">
              AGCM - Happy Commerce Commitments Proceeding PS 11716
            </Typography>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            item
            xs={3}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Happy Commerce Payment Methods
            </Typography>
            <Typography textTransform="none" variant="button">
              Payment methods
            </Typography>
            <Typography textTransform="none" variant="button">
              Happy Commerce Currency Converter
            </Typography>
            <Typography textTransform="none" variant="button">
              Online recharge
            </Typography>
            <Typography textTransform="none" variant="button">
              Happy Commerce Business Amex card
            </Typography>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            item
            xs={3}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Earn with Happy Commerce
            </Typography>
            <Typography textTransform="none" variant="button">
              Sell on Happy Commerce Handmade
            </Typography>
            <Typography textTransform="none" variant="button">
              Become an affiliate
            </Typography>
            <Typography textTransform="none" variant="button">
              Sell on Happy Commerce Business
            </Typography>
            <Typography textTransform="none" variant="button">
              Sell on Happy Commerce
            </Typography>
            <Typography variant="button">
              Build and protect your brand
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Box m={1}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="/">
                HappyCommerce
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
