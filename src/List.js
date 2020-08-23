import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "./redux/actions/actions";

const List = ({
  items,
  onTodoRemoved,
  onToggleTodo,

  onEditItem,
}) => {
  return (
    <div>
      {items.map((item) => (
        <Todo
          key={item.id}
          item={item}
          onTodoRemoved={onTodoRemoved}
          onToggleTodo={onToggleTodo}
          onEditItem={onEditItem}
        />
      ))}
    </div>
  );
};

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
    onEditItem: (item) => {
      dispatch(editTodo(item));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
