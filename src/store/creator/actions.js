import { apiUrl } from "../../config/constants";
import axios from "axios";

export function creatorDetailsFetched(data) {
  return {
    type: "creator/fetched",
    payload: data,
  };
}

export function fetchOneCreator(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/users/${id}`);
    dispatch(creatorDetailsFetched(response.data));
  };
}
