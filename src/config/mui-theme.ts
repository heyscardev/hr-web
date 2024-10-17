"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FC3050",
      100: "#FEA5B2",
      200: "#FD7C90",
      300: "#FD637B",
      400: "#FC4A66",
      500: "#FC3050",
      600: "#D9364F",
      700: "#D32641",
      800: "#B4243A",
      900: "#902133",
    },
    secondary: {
      main: "#030321",
      100: "#3939E7",
      200: "#1414DC",
      300: "#1212C4",
      400: "#1010AD",
      500: "#0E0E96",
      600: "#0B0B7E",
      700: "#090967",
      800: "#07074F",
      900: "#050538",
    },
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
