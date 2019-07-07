import * as actionTypes from "../../constants/actionTypes";
import {priority} from "../../constants/todo";
import {combineReducers} from "redux";

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        todo(null, action)
      ];
    default:
      return state;
  }
};

const initTodo = {
  title: '',
  description: '',
  priority: priority.ORDINARY,
  isDateRequired: false,
  completeUntilDateTime: null,
  completedDateTime: null
};

const todo = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {...initTodo, ...action.data};
    default:
      return initTodo;
  }
};

const showOnly = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_FILTER:
      return [...state, action.data];
    case actionTypes.REMOVE_FILTER:
      return [
        ...state.slice(state.indexOf(action.data)),
        ...state.slice(state.indexOf(action.data) + 1),
      ];
    default:
      return state;
  }
};

export const todoList = combineReducers({
  items,
  showOnly
});
