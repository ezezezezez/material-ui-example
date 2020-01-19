import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Catalog, Preview } from "./";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
      height: "calc(100% - 10px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    },
    overflowY: "auto"
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
}));

const Viewer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Catalog />
        </Paper>
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Preview />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Viewer;
