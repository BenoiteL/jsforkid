/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import getProductDetail from './actions/productDetail';

class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.actions.getProductDetail({ id: this.props.match.params.id });
  }

  render() {
    if (this.props.isLoading) {
      return <span>ça charge</span>;
    }
    if (this.props.error) {
      return <p>{this.props.error}</p>;
    }
    return (
      <div
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/Product"
      >
        <img
          alt={this.props.bike.name}
          itemProp="image"
          src={this.props.bike.image}
        />
        <a itemProp="url" href={`https://monsite.fr/p/${this.props.bike.id}`}>
          <span itemProp="name">{this.props.bike.name}</span>
        </a>
        <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
          <span itemProp="price">
            {this.props.bike.price}
            {this.props.bike.currencySymbol}
          </span>
        </div>
        <span
          itemProp="description"
          dangerouslySetInnerHTML={{ __html: this.props.bike.description }}
        />
      </div>
    );
  }
}

ProductDetail.defaultProps = {
  bike: {},
  error: null,
};

ProductDetail.propTypes = {
  bike: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    currencySymbol: PropTypes.string,
    image: PropTypes.string,
    currencyCode: PropTypes.string,
  }),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  actions: PropTypes.shape({
    getProductDetail: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  bike: state.productDetail.result,
  isLoading: state.productDetail.isLoading,
  error: state.productDetail.error,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getProductDetail }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);
