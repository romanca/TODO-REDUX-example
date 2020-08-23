import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import { createTodo } from "./redux/actions/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const item = {
      title: this.state.term,
      completed: this.state.completed,
      id: Date.now(),
    };
    this.props.createTodo(item);
    this.setState({
      term: "",
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
          boxShadow: "5px 3px black",
        }}>
        <div
          style={{
            border: "2px solid black",
            width: 580,
            minHeight: 580,
            borderRadius: 15,
            margin: "auto",
            marginTop: 7,
          }}>
          <form
            style={{
              textAlign: "center",
            }}
            onSubmit={this.onSubmit}>
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
                boxShadow: " 5px 2px 8px black",
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
                boxShadow: " 5px 2px 8px black",
              }}>
              Submit
            </button>
          </form>
          <List />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo: (item) => {
      dispatch(createTodo(item));
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
