// src/LifecycleExample.js
import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('Child component is being unmounted!');
  }

  render() {
    return <h5>Hello World!</h5>;
  }
}

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true; // set to false to prevent re-rendering
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('after update');
  }

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="p-3 bg-light rounded">
        <h5>Favorite Color: <span style={{ color: this.state.favoriteColor }}>{this.state.favoriteColor}</span></h5>
        <button
          className="btn btn-warning my-2"
          onClick={() => this.setState({ favoriteColor: 'blue' })}
        >
          Change to Blue
        </button>
        <br />
        {this.state.show && <Child />}
        <button className="btn btn-danger mt-2" onClick={this.deleteChild}>
          Delete Child
        </button>
      </div>
    );
  }
}

export default LifecycleExample;
