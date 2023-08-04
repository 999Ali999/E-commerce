import { Box } from "@mui/material";
import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Main/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
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
    ),
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
