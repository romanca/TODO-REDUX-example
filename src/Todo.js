import React, { useState } from "react";
import "./App.css";

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

  return (
    <div>
      {!editing ? (
        <div
          style={{
            border: "1.5px solid grey",
            width: 500,
            height: 30,
            borderRadius: 5,
            margin: "auto",
            marginTop: 5,
            fontWeight: 500,
            fontSize: 20,
            paddingLeft: 10,
            boxShadow: " 5px 4px 8px grey",
            textDecoration,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            onClick={handleToggleEdit}
            style={{
              width: 400,
              overflow: " hidden",
              textOverflow: " ellipsis",
              whiteSpace: "nowrap",
              color: "grey",
            }}
          >
            {item.title}
          </div>
          <div style={{ marginLeft: 23 }}>
            <button
              onClick={handleTodoRemove}
              style={{
                border: "1px solid tomato",
                outline: "none",
                float: "right",
                fontSize: 20,
                fontWeight: 300,
                cursor: "pointer",
                textAlign: "center",
                textDecoration: " none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: 27,
                height: 27,
                marginTop: 1,
                marginRight: 6,
                color: "tomato",
                background: "transparent",
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
            <button
              onClick={handleTodoDone}
              style={{
                border: "1px solid lightgreen",
                marginTop: 1,
                outline: "none",
                float: "right",
                fontSize: 20,
                fontWeight: 300,
                cursor: "pointer",
                textDecoration: " none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 4,
                borderRadius: "50%",
                width: 27,
                height: 27,
                background: "transparent",
                color: "lightgreen",
              }}
            >
              <i className="fa fa-check"></i>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              border: "1.5px solid grey",
              width: 500,
              height: 30,
              borderRadius: 5,
              margin: "auto",
              marginTop: 5,
              fontSize: 20,
              paddingLeft: 10,
              boxShadow: " 5px 4px 8px grey",
              color: "grey",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              style={{
                width: 390,
                height: 18,
                borderRadius: 5,
                outline: "none",
                marginTop: 2,
                fontWeight: 500,
                fontSize: 20,
                paddingLeft: 5,
                marginLeft: -5,
                border: "1px solid grey",
                color: "grey",
              }}
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div style={{ marginLeft: 30 }}>
              <button
                onClick={handleToggleEdit}
                style={{
                  border: "1px solid tomato",
                  outline: "none",
                  backgroundColor: "transparent",
                  float: "right",
                  fontSize: 20,
                  fontWeight: 100,
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: " none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: 27,
                  height: 27,
                  marginTop: 1,
                  marginRight: 6,
                  color: "red",
                }}
              >
                C
              </button>
              <button
                onClick={handleEditItem}
                style={{
                  border: "1px solid lightgreen",
                  marginTop: 1,
                  outline: "none",
                  backgroundColor: "transparent",
                  float: "right",
                  fontSize: 20,
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: " none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 4,
                  borderRadius: "50%",
                  width: 27,
                  height: 27,
                  color: "lightgreen",
                }}
              >
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Todo;
