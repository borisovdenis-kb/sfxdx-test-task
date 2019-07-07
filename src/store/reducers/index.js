import * as actionTypes from '../../constants/actionTypes';
import {combineReducers} from "redux";
import {priority} from "../../constants/todo";

const todoList = (state = [], action) => {
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

export const rootReducer = combineReducers({
  todoList
});
