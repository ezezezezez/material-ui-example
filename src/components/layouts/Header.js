import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { CreateModal } from "../exercises/";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  flex: {
    flex: 1
  }
});

const Header = props => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.flex}>
          Exercise Database
        </Typography>
        <CreateModal />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
