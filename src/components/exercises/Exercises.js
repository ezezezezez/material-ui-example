import React, { Fragment, useContext } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import Form from "./Form";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../../context";

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

const Exercises = () => {
  const value = useContext(AppContext);

  const {
    muscles,
    exercisesByMuscles,
    exercise,
    category,
    editMode,
    handleExerciseSelected,
    handleExerciseEdit,
    handleExerciseDelete,
    handleExerciseEditSubmit
  } = value;

  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          {exercisesByMuscles.map(([muscle, exerciseItems]) =>
            !category || category === muscle ? (
              <Fragment key={muscle}>
                <Typography
                  color="secondary"
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {muscle}
                </Typography>
                <List component="ul">
                  {exerciseItems.map(({ id, title }) => (
                    <ListItem
                      key={id}
                      button
                      onClick={() => handleExerciseSelected(id)}
                    >
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          color="primary"
                          onClick={() => handleExerciseEdit(id)}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          color="primary"
                          onClick={() => handleExerciseDelete(id)}
                        >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom color="secondary">
            {exercise.title ? exercise.title : "Welcome!"}
          </Typography>
          {editMode ? (
            <Form
              key={exercise.id}
              muscles={muscles}
              onSubmit={handleExerciseEditSubmit}
              initExercise={exercise}
            />
          ) : (
            <Typography variant="h6">
              {exercise.description
                ? exercise.description
                : "Please select an exercise from the list on the left."}
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
