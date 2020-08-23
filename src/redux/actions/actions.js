import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from "./actionTypes";

export const createTodo = (item) => {
  return {
    type: ADD_TODO,
    payload: {
      ...item,
      id: Date.now(),
      completed: false,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export function toggleTodo(id) {
  const action = {
    type: TOGGLE_TODO,
    payload: id,
  };
  return action;
}
export function editTodo(payload){
  return{
    type:  EDIT_TODO,
    payload 
  }
}
