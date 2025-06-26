import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TasksState {
  [date: string]: Task[];
}

// A simple utility to check if we are in a browser environment
const isBrowser = typeof window !== 'undefined';

const getInitialState = (): TasksState => {
  if (!isBrowser) {
    return {};
  }
  try {
    const item = window.localStorage.getItem('tasks');
    return item ? JSON.parse(item) : {};
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return {};
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: getInitialState(),
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<{ date: string; task: Task }>) => {
        const { date, task } = action.payload;
        if (!state[date]) {
          state[date] = [];
        }
        state[date].push(task);
      },
      prepare: (payload: { date: string; text: string }) => {
        return {
          payload: {
            date: payload.date,
            task: {
              id: nanoid(),
              text: payload.text,
              completed: false,
            },
          },
        };
      },
    },
    editTask(state, action: PayloadAction<{ date: string; id: string; newText: string }>) {
      const { date, id, newText } = action.payload;
      const task = state[date]?.find(task => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
    deleteTask(state, action: PayloadAction<{ date: string; id: string }>) {
      const { date, id } = action.payload;
      if (state[date]) {
        state[date] = state[date].filter(task => task.id !== id);
      }
    },
    toggleTask(state, action: PayloadAction<{ date: string; id: string }>) {
      const { date, id } = action.payload;
      const task = state[date]?.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
