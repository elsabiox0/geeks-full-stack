import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const AddTask = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Enter task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
