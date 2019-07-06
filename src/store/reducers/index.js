import * as actionTypes from '../../constants/actionTypes';

export const todo = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        action.data
      ];
    default:
      return state;
  }
};
