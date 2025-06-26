import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Matrix Todo</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
