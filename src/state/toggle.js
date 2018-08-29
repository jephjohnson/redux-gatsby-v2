export const toggle = (state = { hidden: false}, action) => {
  switch(action.type) {
    case 'TOGGLE_DIV':
      return Object.assign({}, ...state, {hidden: !state.hidden});
    default:
      return state;
  }
};

