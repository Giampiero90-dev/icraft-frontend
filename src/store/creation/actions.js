import { apiUrl } from "../../config/constants";
import axios from "axios";

export function creationsList(data) {
  return {
    type: "creations/fetched",
    payload: data,
  };
}

export function fetchCreations() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/creations`);
    dispatch(creationsList(response.data));
  };
}
