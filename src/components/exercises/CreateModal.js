import React, { useState, useContext } from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from './Form';
import AppContext from '../../context';

const CreateModal = (props) => {
  const { muscles, handleExerciseCreated } = useContext(AppContext);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleExerciseCreateSubmit = exercise => {
    handleToggle();

    handleExerciseCreated(exercise);
  };

  return (
    <>
      <Fab
        size="small"
        aria-label="add"
        onClick={handleToggle}
        color='secondary'
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleToggle}
        fullWidth
        maxWidth='xs'
      >
        <DialogTitle id="form-dialog-title">
          Create a New Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>
          <Form
            muscles={muscles}
            onSubmit={handleExerciseCreateSubmit}
          />
        </DialogContent>
      </Dialog>
    </>
  )
};

export default CreateModal;