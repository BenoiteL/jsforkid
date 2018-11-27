const products = (state = { isLoading: false, list: [] }, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, isLoading: action.isLoading };
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, isLoading: action.isLoading, list: action.list };
    case 'FETCH_PRODUCTS_ERROR':
      return { ...state, isLoading: action.isLoading, error: action.error };
    default:
      return state;
  }
};

export default products;
