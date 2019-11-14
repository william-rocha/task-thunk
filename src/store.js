import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
const enhancers =
  applyMiddleware(thunk) &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, enhancers);

export { store };
