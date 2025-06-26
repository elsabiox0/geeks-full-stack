// src/features/planner/plannerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDay: null,
  tasksByDay: {}, // { "2025-06-25": [ {id, text} ] }
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    selectDay: (state, action) => {
      state.selectedDay = action.payload;
    },
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) state.tasksByDay[day] = [];
      state.tasksByDay[day].push(task);
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      state.tasksByDay[day] = state.tasksByDay[day].filter(t => t.id !== taskId);
    },
  },
});

export const { selectDay, addTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;
