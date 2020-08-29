import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  COMPLETED_TODOS,
} from "../actions/actionTypes";

const initState = {
  items: [
    {
      title:
        "Somethingnlvnfjnvjfvlnôwekvpwoejvpweovmwwdlômcdôl,xc dwôlcmempewofkwelcmwdôlcmeôqofckeôlcemôl",
      id: "asdsfsf1",
      label: "some label",
      completed: false,
    },
    {
      title: "Thing",
      id: "as",
      label: "some label",
      completed: false,
    },
    {
      title: "Some",
      id: "fsf1",
      label: "some label",
      completed: false,
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
    case TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };
    case COMPLETED_TODOS:
      return {
        ...state,
        items: state.items.filter((i) => i.completed),
      };

    default:
      return state;
  }
};
