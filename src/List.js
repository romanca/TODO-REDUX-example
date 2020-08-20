import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { removeTodo } from "./redux/actions/actions";

const List = ({ items, onTodoRemoved }) => (
  <div>
    {items.map((item) => (
      <Todo key={item.id} item={item} onTodoRemoved={onTodoRemoved} />
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
