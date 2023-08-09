import { Box } from "@mui/material";
import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Main/Footer";
import CartDrawer from "./components/CartPage/CartDrawer";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Header onClick={toggleDrawer} />
          <Main />
        </Box>

        <Box>
          <CartDrawer open={drawer} onClose={() => setDrawer(false)} />
        </Box>

        <Box paddingTop="20px">
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default App;
