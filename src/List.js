import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "./redux/actions/actions";
import "./App.css";

const List = ({ items, onTodoRemoved, onToggleTodo, onEditItem }) => {
  return (
    <div>
      {items && items.length ? (
        items.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onTodoRemoved={onTodoRemoved}
            onToggleTodo={onToggleTodo}
            onEditItem={onEditItem}
          />
        ))
      ) : (
        <div
          style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: 30,
            fontWeight: 600,
          }}>
          "You have no tasks, yet!"
        </div>
      )}
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
