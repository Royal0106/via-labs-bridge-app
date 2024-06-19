"use client";

import React, { FC } from "react";
import { ThemeProvider } from "@mui/material";

import { theme } from "@/app/theme";

interface ThemeCustomizationProps {
  children: React.ReactNode;
}

const ThemeCustomization: FC<ThemeCustomizationProps> = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeCustomization;
