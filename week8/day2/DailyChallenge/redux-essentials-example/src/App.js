// src/App.js
import React from 'react';
import DatePicker from './components/DatePicker';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './index.css'; // or './App.css'


function App() {
  return (
    <div className="container">
      <h1>📅 Daily Planner</h1>
      <DatePicker />
      <AddTask />
      <TaskList />
    </div>
  );
}


export default App;
