import React, { Component } from "react";
import data from "./complexData.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h3>Experiences:</h3>
        {data.Experiences.map((exp, idx) => (
          <div key={idx}>
            <p>{exp.company} - {exp.years}</p>
            <ul>
              {exp.tasks.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
