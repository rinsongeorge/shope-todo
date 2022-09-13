import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
          <ShoppingCartIcon fontSize="medium" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shop ToDo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
