import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "./redux/actions/actions";

const List = ({ items, onTodoRemoved, onToggleTodo }) => (
  <div>
    {items.map((item) => (
      <Todo
        key={item.id}
        item={item}
        onTodoRemoved={onTodoRemoved}
        onToggleTodo={onToggleTodo}
      />
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    items: state.items.items,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onTodoRemoved: (id) => {
      dispatch(removeTodo(id));
    },
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
