import * as actionTypes from "../../constants/actionTypes";
import {priority} from "../../constants/todo";
import {combineReducers} from "redux";
import {getNextId} from "../../sirvices/utils";

// const todoIndex = (todoList, todo) => {
//   for (let i = 0; i < todoList.length; i++) {
//     if (todoList[i])
//   }
// }

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
  completeUntilDateTime: null,
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

const initShowOnly = [
  priority.ORDINARY,
  priority.IMPORTANT,
  priority.VERY_IMPORTANT
];

const showOnly = (state = initShowOnly, action) => {
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
