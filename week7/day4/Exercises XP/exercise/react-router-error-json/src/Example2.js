import React, { Component } from "react";
import data from "./complexData.json";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h3>Skills:</h3>
        <ul>
          {data.Skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
