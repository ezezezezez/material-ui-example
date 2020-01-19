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

  const handleChange = e => {
    setExercise({
      ...exercise,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    onSubmit({
      id: exercise.title.toLowerCase().replace(/ /g, "-"),
      ...exercise
    });
  };

  return (
    <form>
      <TextField
        name="title"
        id="title"
        label="Title"
        value={exercise.title}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="muscles">Muscles</InputLabel>
        <Select
          inputProps={{
            name: "muscles",
            id: "muscles"
          }}
          value={exercise.muscles}
          name="muscles"
          onChange={handleChange}
        >
          {muscles.map(muscle => (
            <MenuItem key={muscle} value={muscle}>
              {muscle}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="description"
        id="description"
        label="Description"
        multiline
        rows="4"
        value={exercise.description}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
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
