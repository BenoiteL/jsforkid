import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from './actions/shoppingCart';
import getProducts from './actions/products';
import './App.css';
import Products from './Products';
import Cart from './cart';

class App extends Component {
  handleAdd = id => {
    this.props.actions.addToBasket({ id });
  };

  handleRemove = id => {
    this.props.actions.removeFromBasket({ id });
  };

  handleClick = () => this.props.actions.getProducts(); // le getProducts du mapDispatchToProps

  render() {
    return (
      <div className="App">
        <Cart total={this.props.basket.length} />
        <button
          type="button"
          onClick={this.handleClick}
          disabled={this.props.products.isLoading}
        >
          {this.props.products.isLoading ? 'ça charge' : 'charger les produits'}
        </button>
        <Products
          products={this.props.products.list}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
        />
        <Cart total={this.props.basket.length} />
      </div>
    );
  }
}

App.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.number).isRequired,
  products: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    error: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    addToBasket: PropTypes.func.isRequired,
    removeFromBasket: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
  }).isRequired,
};

// Injection de l'état du store dans les props du composant (permet de les afficher)
const mapStateToProps = state => ({
  basket: state.basket,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actionCreators, getProducts }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
