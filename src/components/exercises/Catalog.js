import React, { Fragment, useContext } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import AppContext from "../../context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    textTransform: "capitalize"
  }
});

const Catalog = () => {
  const classes = useStyles();
  const value = useContext(AppContext);
  const {
    exercisesByMuscles,
    category,
    handleExerciseSelected,
    handleExerciseEdit,
    handleExerciseDelete
  } = value;
  return (
    <div>
      {exercisesByMuscles.map(
        ([muscle, exerciseItems]) =>
          (!category || category === muscle) && (
            <Fragment key={muscle}>
              <Typography
                color="secondary"
                variant="h6"
                className={classes.title}
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
                    <ListItemSecondaryAction data-id={id}>
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
          )
      )}
    </div>
  );
};

export default Catalog;
