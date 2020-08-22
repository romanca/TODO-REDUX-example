import { createStore, applyMiddleware } from "redux";
import combineReducers from "../reducers/index.js";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
  return createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
