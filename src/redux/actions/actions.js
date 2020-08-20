import { ADD_TODO, DELETE_TODO } from "./actionTypes";

export function createTodo(item) {
  return {
    type: ADD_TODO,
    payload: {
      ...item,
      id: Date.now(),
    },
  };
}

export function removeTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}
