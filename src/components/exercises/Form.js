import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { Button } from "@material-ui/core";

const Form = ({ muscles, onSubmit, initExercise }) => {
  const getInitState = () => {
    return initExercise
      ? initExercise
      : {
          title: "",
          description: "",
          muscles: ""
        };
  };

  const [exercise, setExercise] = useState(getInitState());

  const handleChange = name => e => {
    setExercise({
      ...exercise,
      [name]: e.target.value
    });
  };

  const handleSubmit = e => {
    onSubmit({
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...exercise
    });
  };

  return (
    <form>
      <TextField
        label="Title"
        value={exercise.title}
        onChange={handleChange("title")}
        margin="normal"
        fullWidth
      />
      <br />
      <FormControl fullWidth>
        <InputLabel id="muscles">Muscles</InputLabel>
        <Select
          labelId="muscles"
          value={exercise.muscles}
          onChange={handleChange("muscles")}
        >
          {muscles.map(muscle => (
            <MenuItem key={muscle} value={muscle}>
              {muscle}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <TextField
        multiline
        rows="4"
        label="Description"
        value={exercise.description}
        onChange={handleChange("description")}
        margin="normal"
        fullWidth
      />
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        disabled={!exercise.title || !exercise.muscles}
      >
        {initExercise ? "Edit" : "Create"}
      </Button>
    </form>
  );
};

export default Form;
