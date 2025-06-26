// src/components/AddTask.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/planner/plannerSlice';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.planner.selectedDay);

  const handleAdd = () => {
    if (!text.trim() || !selectedDay) return;
    dispatch(addTask({
      day: selectedDay,
      task: { id: Date.now(), text }
    }));
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New Task" />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
