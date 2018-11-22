import React from 'react';
import products from './products'
import Product from './Product.jsx'

class Products extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <ul>
        {
          products.map(
            (product) => <Product key={product.id} bike={product} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />
          )
        }
      </ul>
    );
  }
}

export default Products;
