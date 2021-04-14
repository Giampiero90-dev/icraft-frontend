import { apiUrl } from "../../config/constants";
import axios from "axios";

export function categoriesFetched(data) {
  return {
    type: "categories/fetched",
    payload: data,
  };
}

export function fetchCategories() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/categories`);
    dispatch(categoriesFetched(response.data));
  };
}
