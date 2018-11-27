const getProducts = () => dispatch => {
  dispatch({ type: 'FETCH_PRODUCTS', isLoading: true });
  fetch('/products')
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: 'FETCH_PRODUCTS_SUCCESS',
        isLoading: false,
        list: json,
      }),
    )
    .catch(error =>
      dispatch({ type: 'FETCH_PRODUCTS_FAIL', isLoading: false, error }),
    );
};

export default getProducts;
