import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoActions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo..."
        style={{
          flex: 1,
          padding: '10px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
