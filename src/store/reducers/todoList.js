import * as actionTypes from "../../constants/actionTypes";
import {priority} from "../../constants/todo";
import {combineReducers} from "redux";
import {getNextId} from "../../sirvices/utils";

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        todo(null, action)
      ];
    case actionTypes.UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.data.id) {
          return {...todo, ...action.data}
        }

        return todo;
      });
    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.data.id);
    default:
      return state;
  }
};

const initTodo = {
  id: null,
  title: '',
  description: '',
  priority: priority.ORDINARY,
  isCompleted: false,
  isDateRequired: false,
  completeByDateTime: null,
  completedDateTime: null
};

const todo = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        ...initTodo,
        ...action.data
      };
      newTodo.id = getNextId();

      return newTodo;
    default:
      return initTodo;
  }
};

const currentEditableTodo = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_EDITABLE_TODO:
      return action.data;
    default:
      return state;
  }
};

const initShowOnly = [
  // priority.ORDINARY,
  // priority.IMPORTANT,
  // priority.VERY_IMPORTANT
];

const showOnly = (state = initShowOnly, action) => {
  switch (action.type) {
    case actionTypes.ADD_FILTER:
      return [...state, action.data];
    case actionTypes.REMOVE_FILTER:
      return state.filter(item => item !== action.data);
    default:
      return state;
  }
};

export const todoList = combineReducers({
  items,
  currentEditableTodo,
  showOnly
});
