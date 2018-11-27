const basket = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      const newState = state.slice();
      newState.push(action.id);
      return newState;
    }
    case 'REMOVE_TO_BASKET':
      return state.filter(element => element !== action.id);
    default:
      return state;
  }
};

export default basket;
