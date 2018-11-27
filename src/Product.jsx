import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false,
    };
  }

  handleAddClick = () => {
    this.setState(prevState => ({ isInCart: !prevState.isInCart }));
    this.props.onAdd(this.props.bike.id);
  };

  handleRemoveClick = () => {
    this.setState(prevState => ({ isInCart: !prevState.isInCart }));
    this.props.onRemove(this.props.bike.id);
  };

  render() {
    const cssButtonClassName = 'pouet';
    return (
      <li
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/Product"
      >
        <img
          alt={this.props.bike.name}
          itemProp="image"
          src={this.props.bike.image}
        />
        <Link itemProp="url" to={`/p${this.props.bike.id}`}>
          <span itemProp="name">{this.props.bike.name}</span>
        </Link>
        <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
          <span itemProp="price">
            {this.props.bike.price}
            {this.props.bike.currencySymbol}
          </span>
        </div>
        {this.state.isInCart ? (
          <button
            className={cssButtonClassName}
            type="button"
            onClick={this.handleRemoveClick}
          >
            Supprimer du panier
          </button>
        ) : (
          <button
            className={cssButtonClassName}
            type="button"
            onClick={this.handleAddClick}
          >
            Ajouter au panier
          </button>
        )}
        <span
          itemProp="description"
          dangerouslySetInnerHTML={{ __html: this.props.bike.description }}
        />
      </li>
    );
  }
}

Product.propTypes = {
  bike: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    currencySymbol: PropTypes.string,
    image: PropTypes.string,
    currencyCode: PropTypes.string,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default Product;
