// src/BuggyCounter.js
import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }

    return (
      <button onClick={this.handleClick} className="btn btn-danger m-2">
        Count: {this.state.counter}
      </button>
    );
  }
}

export default BuggyCounter;
