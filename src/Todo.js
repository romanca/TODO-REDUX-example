import React, { useState } from "react";

const Todo = ({ item, onTodoRemoved, onToggleTodo, onEditItem }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(item.title);

  const handleTodoRemove = () => {
    onTodoRemoved(item.id);
  };

  const handleTodoDone = () => {
    onToggleTodo(item.id);
  };

  const handleToggleEdit = () => {
    setEditing(!editing);
  };

  const handleEditItem = () => {
    onEditItem({
      ...item,
      title: value,
    });
    handleToggleEdit();
  };

  const textDecoration = item.completed ? "line-through" : "none";
  const backgroundColor = item.completed ? "red" : "lightskyblue";
  return (
    <div>
      {!editing ? (
        <div
          style={{
            border: "1.5px solid black",
            width: 500,
            height: 30,
            borderRadius: 5,
            backgroundColor,
            margin: "auto",
            marginTop: 5,
            fontWeight: 500,
            fontSize: 20,
            paddingLeft: 10,
            boxShadow: " 5px 4px 8px black",
            textDecoration,
          }}>
          <div onClick={handleToggleEdit}>{item.title}</div>
          <div style={{ marginTop: -23 }}>
            <button
              onClick={handleTodoRemove}
              style={{
                border: "2px solid black",
                outline: "none",
                backgroundColor: "magenta",
                float: "right",
                fontSize: 20,
                fontWeight: 300,
                cursor: "pointer",
                textAlign: "center",
                textDecoration: " none",
                display: " inline-block",
                borderRadius: "50%",
                width: 27,
                height: 27,
                marginTop: 1,
                marginRight: 6,
              }}>
              x
            </button>
            <button
              onClick={handleTodoDone}
              style={{
                border: "2px solid black",
                marginTop: 1,
                border: "none",
                outline: "none",
                backgroundColor: "green",
                float: "right",
                fontSize: 20,
                fontWeight: 300,
                cursor: "pointer",
                textAlign: "center",
                textDecoration: " none",
                display: " inline-block",
                marginRight: 4,
                borderRadius: "50%",
                width: 27,
                height: 27,
              }}>
              <i className='fa fa-check'></i>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              border: "1.5px solid black",
              width: 500,
              height: 30,
              borderRadius: 5,
              backgroundColor,
              margin: "auto",
              marginTop: 5,
              fontWeight: 500,
              fontSize: 20,
              paddingLeft: 10,
              boxShadow: " 5px 4px 8px black",
              textDecoration,
            }}>
            <input
              style={{
                width: 400,
                height: 18,
                borderRadius: 5,
                outline: "none",
                backgroundColor: "teal",
                marginTop: 2,
                fontWeight: 500,
                fontSize: 20,
                paddingLeft: 5,
                marginLeft: -5,
              }}
              type='text'
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div style={{ marginTop: -26 }}>
              <button
                onClick={handleToggleEdit}
                style={{
                  border: "2px solid black",
                  outline: "none",
                  backgroundColor: "magenta",
                  float: "right",
                  fontSize: 20,
                  fontWeight: 300,
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: " none",
                  display: " inline-block",
                  borderRadius: "50%",
                  width: 27,
                  height: 27,
                  marginTop: 1,
                  marginRight: 6,
                }}>
                x
              </button>
              <button
                onClick={handleEditItem}
                style={{
                  border: "2px solid black",
                  marginTop: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "green",
                  float: "right",
                  fontSize: 20,
                  fontWeight: 300,
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: " none",
                  display: " inline-block",
                  marginRight: 4,
                  borderRadius: "50%",
                  width: 27,
                  height: 27,
                }}>
                <i className='fa fa-check'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Todo;
