import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectOneCreation } from "./selectors";

export function creationDetailsFetched(data) {
  return {
    type: "creation/fetched",
    payload: data,
  };
}

export function commentPostSuccess(data) {
  return {
    type: "comment/posted",
    payload: data,
  };
}

export function fetchOneCreation(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/creations/${id}`);
    dispatch(creationDetailsFetched(response.data));
  };
}

export const postComment = (author, commentText) => {
  return async (dispatch, getState) => {
    const creation = selectOneCreation(getState());

    const response = await axios.post(
      `${apiUrl}/creations/${creation.id}/comments`,
      {
        author,
        commentText,
      }
    );

    dispatch(commentPostSuccess(response.data));
  };
};
