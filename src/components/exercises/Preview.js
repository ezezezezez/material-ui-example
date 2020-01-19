import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import AppContext from "../../context";
import Form from "./Form";

const Preview = props => {
  const value = useContext(AppContext);
  const { muscles, exercise, editMode, handleExerciseEditSubmit } = value;
  return (
    <>
      <Typography variant="h4" gutterBottom color="secondary">
        {exercise.title || "Welcome!"}
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
          {exercise.description ||
            "Please select an exercise from the list on the left."}
        </Typography>
      )}
    </>
  );
};

export default Preview;
