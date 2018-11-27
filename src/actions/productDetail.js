const getProductDetail = ({ id }) => dispatch => {
  dispatch({ type: 'GET_PRODUCTDETAIL', isLoading: true });
  fetch(`/products/${id}`)
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: 'GET_PRODUCTDETAIL_SUCCESS',
        isLoading: false,
        result: json,
      }),
    )
    .catch(error =>
      dispatch({ type: 'GET_PRODUCTDETAIL_FAIL', isLoading: false, error }),
    );
};

export default getProductDetail;
