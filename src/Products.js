import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Products = props => (
  <ul>
    {props.products.map(product => (
      <Product
        key={product.id}
        bike={product}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
      />
    ))}
  </ul>
);

Products.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  // eslint-disable-next-line
  products: PropTypes.array.isRequired,
};
export default Products;
