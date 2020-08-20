import React from "react";

const Todo = ({ item, onTodoRemoved }) => {
  const handleTodoRemove = () => {
    onTodoRemoved(item.id);
  };
  return (
    <div
      style={{
        border: "1.5px solid black",
        width: 500,
        height: 30,
        borderRadius: 5,
        backgroundColor: "lightskyblue",
        margin: "auto",
        marginTop: 5,
        fontWeight: 500,
        fontSize: 20,
        paddingLeft: 10,
      }}>
      {item.title}
      <button
        onClick={handleTodoRemove}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          float: "right",
          fontSize: 20,
          fontWeight: 800,
          cursor: "pointer",
        }}>
        x
      </button>
    </div>
  );
};
export default Todo;
