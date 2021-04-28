import { createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import reducer from "./rootReducer";

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  window.navigator.userAgent.includes("Chrome")
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose
);

const store = createStore(reducer, enhancer);

export default store;
