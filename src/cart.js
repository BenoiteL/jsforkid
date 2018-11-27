import React from 'react';
import PropTypes from 'prop-types';

const Cart = props => <p>{`${props.total} produit(s) dans le panier`}</p>;

Cart.defaultProps = {
  total: 0,
};

Cart.propTypes = {
  total: PropTypes.number,
};

export default Cart;
