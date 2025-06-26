import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './index.css'; // import CSS file

const App = () => {
  return (
    <div className="container">
      <h1>React Redux Todo App ✅</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
