import { ADD_TODO, DELETE_TODO } from "../actions/actionTypes";

const initState = {
  items: [
    {
      title: "Something",
      id: "asdsfsf1",
      label: "some label",
    },
    {
      title: "Thing",
      id: "as",
      label: "some label",
    },
    {
      title: "Some",
      id: "fsf1",
      label: "some label",
    },
  ],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    default:
      return state;
  }
};
