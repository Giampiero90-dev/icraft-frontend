const initialState = { loading: true, creator: {} };

export default function creatorDetails(state = initialState, action) {
  switch (action.type) {
    case "creator/loadingStart":
      return { ...state, loading: action.payload };

    case "creator/fetched":
      return {
        loading: false,
        creator: action.payload,
      };

    default:
      return state;
  }
}
