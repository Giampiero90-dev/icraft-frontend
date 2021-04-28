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
    case "creations/posted":
      return {
        ...state,
        loading: false,
        allCreations: [...state.allCreations, action.payload],
      };

    default:
      return state;
  }
}
