/* eslint-disable import/no-anonymous-default-export */
import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  fullName: localStorage.getItem("fullName"),
  bio: localStorage.getItem("bio"),
  email: localStorage.getItem("email"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("fullName", action.payload.fullName);
      localStorage.setItem("bio", action.payload.bio);
      localStorage.setItem("email", action.payload.email);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("fullName");
      localStorage.removeItem("bio");
      localStorage.removeItem("email");
      return {
        ...initialState,
        token: null,
        fullName: null,
        bio: null,
        email: null,
      };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
