import React, { useEffect } from "react";
import { hydrate } from "react-dom";
import App from "./Components/App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

hydrate(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector("#root"),
  () => {
    document.querySelector("#jss-styles").remove();
  }
);
