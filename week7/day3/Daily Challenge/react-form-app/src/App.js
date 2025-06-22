import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isLactoseFree: false,
        isNutFree: false
      }
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      this.setState((prevState) => ({
        dietaryRestrictions: {
          ...prevState.dietaryRestrictions,
          [name]: checked
        }
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      gender: this.state.gender,
      destination: this.state.destination,
      vegan: this.state.dietaryRestrictions.isVegan ? "on" : "off",
      lactoseFree: this.state.dietaryRestrictions.isLactoseFree ? "on" : "off",
      nutFree: this.state.dietaryRestrictions.isNutFree ? "on" : "off"
    }).toString();

    window.location.href = `/?${query}`;
  };

  render() {
    return (
      <div>
        <FormComponent
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
