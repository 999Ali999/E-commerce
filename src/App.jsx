import { Box } from "@mui/material";
import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Main/Footer";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Header />
          <Main />
        </Box>
        <Box paddingTop="20px">
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default App;
