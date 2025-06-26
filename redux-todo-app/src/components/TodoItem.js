import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoActions';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const handleToggleComplete = () => {
    toggleTodo(todo.id);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={handleToggleComplete}>
        {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleRemoveTodo}>Remove</button>
    </div>
  );
};

const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);