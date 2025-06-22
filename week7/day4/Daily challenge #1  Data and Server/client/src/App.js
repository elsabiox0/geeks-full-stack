import React, { Component } from "react";

class App extends Component {
  state = {
    message: "",
    input: "",
    response: "",
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:5000/api/hello");
      const data = await res.json();
      this.setState({ message: data.message });
    } catch (err) {
      console.error("Error fetching GET:", err);
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: this.state.input }),
      });
      const data = await res.json();
      this.setState({ response: data.message });
    } catch (err) {
      console.error("Error sending POST:", err);
    }
  };

  render() {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type something..."
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>

        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
