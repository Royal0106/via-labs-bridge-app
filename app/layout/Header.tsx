import { FC } from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bridge App
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;