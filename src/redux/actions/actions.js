import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

export const createTodo = (item) => {
  return {
    type: ADD_TODO,
    payload: {
      ...item,
      id: Date.now(),
      completed: true,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
