import { createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(rootReducer, enhancer);

export default store;
