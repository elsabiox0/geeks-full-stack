import React, { Component } from "react";
import data from "./complexData.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h3>Social Media:</h3>
        <ul>
          {data.SocialMedias.map((sm, idx) => (
            <li key={idx}>{sm}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
