import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Cart from './cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  handleAdd = id => {
    this.setState(prevState => {
      const cart = prevState.cart.slice();
      cart.push(id);
      return { cart };
    });
  };

  handleRemove = id => {
    this.setState(prevState => {
      const cart = prevState.cart.filter(element => element !== id);
      return { cart };
    });
  };

  render() {
    return (
      <div className="App">
        <Cart total={this.state.cart.length} />
        <Products onAdd={this.handleAdd} onRemove={this.handleRemove} />
        <Cart total={this.state.cart.length} />
      </div>
    );
  }
}

export default App;
