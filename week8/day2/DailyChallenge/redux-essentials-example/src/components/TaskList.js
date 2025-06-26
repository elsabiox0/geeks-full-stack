// src/components/TaskList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/planner/plannerSlice';

export default function TaskList() {
  const dispatch = useDispatch();
  const { selectedDay, tasksByDay } = useSelector((state) => state.planner);
  const tasks = tasksByDay[selectedDay] || [];

  return (
    <div>
      <h3>Tasks for {selectedDay || "..."}</h3>
      {tasks.map(task => (
        <div key={task.id}>
          {task.text}
          <button onClick={() => dispatch(deleteTask({ day: selectedDay, taskId: task.id }))}>❌</button>
        </div>
      ))}
    </div>
  );
}
