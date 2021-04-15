import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import creations from "./creation/reducer";
import creationDetails from "./creationDetails/reducer";
import categoriesReducer from "./category/reducer";
import creatorDetails from "./creator/reducer";

export default combineReducers({
  appState,
  user,
  creations,
  creationDetails,
  categoriesReducer,
  creatorDetails,
});
