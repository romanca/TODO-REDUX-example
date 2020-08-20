import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    return (
      <div
        style={{
          border: "2px solid black",
          width: 600,
          minHeight: 600,
          borderRadius: 15,
          overflowY: "scroll",
          backgroundColor: "tomato",
          margin: "auto",
        }}>
        <form style={{ textAlign: "center" }} onSubmit={this.onSubmit}>
          <input
            value={this.state.term}
            onChange={this.onChange}
            style={{
              border: "1.5px solid black",
              width: 200,
              height: 40,
              borderRadius: 5,
              marginTop: 20,
              fontSize: 20,
              fontWeight: 200,
              outline: "none",
              paddingLeft: 12,
              backgroundColor: "yellow",
            }}
          />
          <button
            style={{
              height: 45,
              width: 60,
              marginLeft: 10,
              border: "1.5px solid black",
              borderRadius: 5,
              backgroundColor: "mediumseagreen",
              paddingTop: 5,
              fontWeight: 200,
              outline: "none",
            }}>
            Submit
          </button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
export default App;
