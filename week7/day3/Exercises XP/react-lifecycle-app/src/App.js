// src/App.js
import React, { Component } from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import LifecycleExample from './LifecycleExample';

class App extends Component {
  render() {
    console.log("Rendering App component");
    return (
      <div className="container mt-4">
        <h1>🧪 React Error Boundary & Lifecycle</h1>

        {/* Simulation 1: Both inside same ErrorBoundary */}
        <h3>Simulation 1</h3>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <hr />

        {/* Simulation 2: Each inside own ErrorBoundary */}
        <h3>Simulation 2</h3>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>

        <hr />

        {/* Simulation 3: No ErrorBoundary (will crash whole app) */}
        <h3>Simulation 3</h3>
        <BuggyCounter />

        <hr />

        {/* Lifecycle Demo */}
        <h3>Lifecycle Demonstration</h3>
        <LifecycleExample />
      </div>
    );
  }
}

export default App;
