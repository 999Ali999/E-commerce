import {
  AppBar,
  Badge,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsIcon from "@mui/icons-material/Settings";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "42ch",
      },
    },
  },
}));

const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" textTransform="none">
                Happy Shop
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box sx={{ display: "flex" }} gap={0.5}>
              <IconButton size="large">
                <Badge badgeContent={3} color="secondary">
                  <ShoppingCartRoundedIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>

              <IconButton size="large">
                <AccountCircleRoundedIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton size="large">
                <SettingsIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
