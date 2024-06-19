"use client";

import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: blue,
    background: {
      default: "#F1F5F9",
      paper: "white",
    },
  },
  shape: {
    borderRadius: 8,
  },
});