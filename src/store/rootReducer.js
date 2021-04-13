import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import creations from "./creation/reducer";
import creationDetails from "./creationDetails/reducer";

export default combineReducers({
  appState,
  user,
  creations,
  creationDetails,
});
