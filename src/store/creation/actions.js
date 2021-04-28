import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";

export function creationsList(data) {
  return {
    type: "creations/fetched",
    payload: data,
  };
}

export function creationPostSuccess(data) {
  return {
    type: "creations/posted",
    payload: data,
  };
}

export function fetchCreations() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/creations`);
    dispatch(creationsList(response.data));
  };
}

export const postCreation = (
  title,
  description,
  imageUrl,
  difficulty,
  categoryId
) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());
    const token = user.token;
    console.log(user);

    const response = await axios.post(
      `${apiUrl}/creations/${user.id}`,
      {
        title,
        description,
        imageUrl,
        difficulty,
        categoryId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(creationPostSuccess(response.data));
  };
};
