import { FC } from "react";
import {
  Box,
} from "@mui/material";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header/>
      {children}
    </Box>
  );
};

export default Layout;
