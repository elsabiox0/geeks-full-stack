import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/todoActions';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);