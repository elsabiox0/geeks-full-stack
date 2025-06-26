import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './todoActions';

const initialState = {}; // State will be an object: { day: [tasks], ... }

let nextId = 1;

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { day, text } = action.payload;
      return {
        ...state,
        [day]: [
          ...(state[day] || []), // Ensure array exists for the day
          { id: nextId++, text, completed: false }
        ] // Add new task to the specific day
      };
    case TOGGLE_TODO:
      const { id, day: toggleDay } = action.payload;
      return {
        ...state,
        [toggleDay]: state[toggleDay].map(todo =>
          todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case REMOVE_TODO:
      return {
        ...state,
        [action.payload.day]: state[action.payload.day].filter(
          todo => todo.id !== action.payload.id)
      }
    default:
      return state;
  }
}
