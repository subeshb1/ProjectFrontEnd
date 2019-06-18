import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";
import { LoadBar, AuthProvider } from "context";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[900]
    },
    primary: {
      main: grey[900]
    }
  }
});

function Root() {
  return (
    <LoadBar>
      <AuthProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <SnackbarProvider preventDuplicate>
              <App />
            </SnackbarProvider>
          </ThemeProvider>
        </Router>
      </AuthProvider>
    </LoadBar>
  );
}
export default Root;
