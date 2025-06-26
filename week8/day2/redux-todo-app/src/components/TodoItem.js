import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        padding: '10px',
        marginBottom: '8px',
        backgroundColor: '#f1f1f1',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <span>{todo.text}</span>
      <div>
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{
            marginRight: '10px',
            padding: '5px 10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          ✔
        </button>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          style={{
            padding: '5px 10px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          🗑
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
