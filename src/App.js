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
    if (this.state.term === "") {
      alert("Enter a  task");
    } else {
      const item = {
        title: this.state.term,
        completed: this.state.completed,
        id: Date.now(),
      };
      this.props.createTodo(item);
      this.setState({
        term: "",
      });
    }
  };

  render() {
    return (
      <div
        style={{
          border: "2px solid grey",
          width: 600,
          minHeight: 600,
          borderRadius: 15,
          overflowY: "scroll",
          boxShadow: " 5px 2px 8px grey",
        }}
      >
        <div
          style={{
            border: "2px solid grey",
            width: 580,
            minHeight: 580,
            borderRadius: 15,
            margin: "auto",
            marginTop: 7,
          }}
        >
          <form
            style={{
              textAlign: "center",
            }}
          >
            <input
              value={this.state.term}
              onChange={this.onChange}
              placeholder="Add a task..."
              style={{
                border: "1.5px solid grey",
                width: 200,
                height: 40,
                borderRadius: 5,
                marginTop: 20,
                fontSize: 20,
                fontWeight: 200,
                outline: "none",
                paddingLeft: 12,
                boxShadow: " 5px 2px 8px grey",
              }}
            />
            <button
              onClick={this.onSubmit}
              style={{
                height: 45,
                width: 60,
                marginLeft: 10,
                border: "1.5px solid lightgreen",
                borderRadius: 5,
                paddingTop: 5,
                fontWeight: 200,
                outline: "none",
                boxShadow: " 5px 2px 8px grey",
                cursor: "pointer",
                background: "transparent",
                color: "green",
              }}
            >
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
