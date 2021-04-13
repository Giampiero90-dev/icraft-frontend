import { apiUrl } from "../../config/constants";
import axios from "axios";

export function creationDetailsFetched(data) {
  return {
    type: "creation/fetched",
    payload: data,
  };
}

export function fetchOneCreation(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/creations/${id}`);
    dispatch(creationDetailsFetched(response.data));
  };
}
