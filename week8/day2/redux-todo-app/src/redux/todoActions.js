export const ADD_TASK_BY_DAY = 'ADD_TASK_BY_DAY';
export const TOGGLE_TASK_BY_DAY = 'TOGGLE_TASK_BY_DAY';
export const REMOVE_TASK_BY_DAY = 'REMOVE_TASK_BY_DAY';

export const addTaskByDay = (day, text) => ({
  type: ADD_TASK_BY_DAY,
  payload: { day, text },
});

export const toggleTaskByDay = (day, id) => ({
  type: TOGGLE_TASK_BY_DAY,
  payload: { day, id },
});

export const removeTaskByDay = (day, id) => ({
  type: REMOVE_TASK_BY_DAY,
  payload: { day, id },
});
