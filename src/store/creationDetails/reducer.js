const initialState = { loading: true, creation: null };

export default function creationDetails(state = initialState, action) {
  switch (action.type) {
    case "creation/loadingStart":
      return { ...state, loading: action.payload };

    case "creation/fetched":
      return {
        loading: false,
        creation: action.payload,
      };

    default:
      return state;
  }
}
