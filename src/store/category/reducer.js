const initialState = { loading: true, categories: [] };

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/loadingStart":
      return { ...state, loading: action.payload };

    case "categories/fetched":
      return {
        loading: false,
        categories: action.payload,
      };

    default:
      return state;
  }
}
