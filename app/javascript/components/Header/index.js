import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(() => ({
  AppBarRoot: {
    backgroundColor: "white",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.AppBarRoot}>
      <Toolbar>
        <Typography variant="h5" color="primary">Book a Facility</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
