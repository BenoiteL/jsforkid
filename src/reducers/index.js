import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import basket from './basket';
import products from './products';
import productDetail from './productDetail';

// combineReducers permet de lier tous les reducers au store redux
// les propriétés de l'objet en premier argument seront celle de l'état du store
// propriétés que nous pourrons injecter dans les props des composant avec connect
// cf. https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// const reducers = combineReducers({
//   basket,
//   products,
// });

export default history =>
  combineReducers({
    router: connectRouter(history),
    basket,
    products,
    productDetail,
  });

// export default reducers;
