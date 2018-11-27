const productDetail = (state = { isLoading: true, result: {} }, action) => {
  switch (action.type) {
    case 'GET_PRODUCTDETAIL':
      return { ...state, isLoading: action.isLoading };
    case 'GET_PRODUCTDETAIL_SUCCESS':
      return { ...state, isLoading: action.isLoading, result: action.result };
    case 'GET_PRODUCTDETAIL_ERROR':
      return { ...state, isLoading: action.isLoading, error: action.error };
    default:
      return state;
  }
};

export default productDetail;
