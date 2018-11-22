import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false
    }
  }

  handleAddClick = () => {
    this.setState( (prevState) => { return {isInCart: !prevState.isInCart} } );
    this.props.onAdd(this.props.bike.id);
  };

  handleRemoveClick = () => {
    this.setState( (prevState) => { return {isInCart: !prevState.isInCart} } );
    this.props.onRemove(this.props.bike.id);
  };

  render() {
    const cssButtonClassName = 'pouet';
    return (
      <li itemProp="itemListElement" itemScope itemType="http://schema.org/Product">
        <img alt="Photo of product" itemProp="image"
             src={this.props.bike.image} />
        <a itemProp="url" href={`https://monsite.fr/p/${this.props.bike.id}`}>
          <span itemProp="name">{this.props.bike.name}</span>
        </a>
        <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
          <span itemProp="price">{this.props.bike.price}{this.props.bike.currencySymbol}</span>
        </div>
        {
          this.state.isInCart ?
            <button className={cssButtonClassName} type="button" onClick={this.handleRemoveClick}>Supprimer du panier</button>
            :
            <button className={cssButtonClassName} type="button" onClick={this.handleAddClick}>Ajouter au panier</button>
        }
        <span itemProp="description" dangerouslySetInnerHTML={{__html: this.props.bike.description}} />
      </li>
    );
  }
}

export default Product;
