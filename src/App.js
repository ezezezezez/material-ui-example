import React, { useState } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Footer } from './components/layouts';
import Exercises from './components/exercises/Exercises';
import { muscles, exercises as exercisesInitState } from './store';
import { Provider } from './context';

const App = (props) => {
  const [exercises, setExercises] = useState(exercisesInitState);
  const [exercise, setExercise] = useState({});
  const [category, setCategory] = useState();
  const [editMode, setEditMode] = useState(false);

  const getExercisesByMuscles = () => {
    const initExercises = muscles.reduce((exercises, muscle) => ({
      ...exercises,
      [muscle]: []
    }), {});

    return Object.entries(exercises.reduce((exercisesByMuscles, exercise) => {
      const { muscles } = exercise;

      exercisesByMuscles[muscles].push(exercise);

      return exercisesByMuscles;
    }, initExercises));
  };

  const handleCategorySelected = category => {
    setCategory(category);
  };

  const handleExerciseSelected = id => {
    setExercise(exercises.find(ex => ex.id === id));
    setEditMode(false);
  };

  const handleExerciseCreated = exercise => {
    setExercises([
      ...exercises,
      exercise
    ]);
  };

  const handleExerciseDelete = id => {
    setExercises(exercises.filter(ex => ex.id !== id));
    setEditMode(exercise.id === id ? false : editMode);
    setExercise(exercise.id === id ? {} : exercise);
  };

  const handleExerciseEdit = id => {
    setExercise(exercises.find(ex => ex.id === id));
    setEditMode(true);
  };

  const handleExerciseEditSubmit = exercise => {
    setExercises([
      ...exercises.filter(ex => ex.id !== exercise.id),
      exercise
    ]);
    setExercise(exercise);
  };

  const exercisesByMuscles = getExercisesByMuscles();

  const getContext = () => ({
    muscles,
    exercises,
    exercisesByMuscles,
    exercise,
    category,
    editMode,
    handleExerciseCreated,
    handleExerciseSelected,
    handleCategorySelected,
    handleExerciseEdit,
    handleExerciseEditSubmit,
    handleExerciseDelete
  });

  return (
    <Provider value={getContext()}>
      <CssBaseline />
      <Header />
      <Exercises />
      <Footer />
    </Provider>
  );
}

export default App;
