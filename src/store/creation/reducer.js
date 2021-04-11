const initialState = { loading: true, allCreations: [] };

export default function creation(state = initialState, action) {
  switch (action.type) {
    case "creations/loadingStart":
      return { ...state, loading: action.payload };

    case "creations/fetched":
      return {
        loading: false,
        allCreations: action.payload,
      };

    default:
      return state;
  }
}
