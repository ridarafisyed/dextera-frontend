/** @format */

// import styled from "styled-components";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#796ef0", //blueish purple
    },
    // secondary: {
    //   main: "",
    // },
    error: {
      main: "#e85355", //red
    },
    warning: {
      main: "#fd9905", // orange
    },
    success: {
      main: "#28c570", //green
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    htmlFontSize: 14,
    fontSize: 12,
    color: "#333",
  },
});

export default theme;
