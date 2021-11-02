const fetchMoreReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        hits: action.payload
          ? [...state.hits, ...action.payload.hits]
          : [...state.hits],
        next: action.payload.next,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        hasError: true,
        next: null,
      };
    default:
      throw new Error();
  }
};

export default fetchMoreReducer;
