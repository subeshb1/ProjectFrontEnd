import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";
import LoadBar from "context/LoadBar";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#fff"
    },
    primary: {
      main: grey[900]
    }
  }
});

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider preventDuplicate>
          <LoadBar>
            <App />
          </LoadBar>
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}
export default Root;
