import {
  ADD_FILTER,
  ADD_TODO,
  DELETE_TODO, REMOVE_FILTER,
  SET_CURRENT_EDITABLE_TODO,
  UPDATE_TODO
} from "../constants/actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  data: todo
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  data: todo
});

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  data: todo
});

export const setCurrentEditableTodo = (todo) => ({
  type: SET_CURRENT_EDITABLE_TODO,
  data: todo
});

export const addFilter = (filterItem) => ({
  type: ADD_FILTER,
  data: filterItem
});

export const removeFilter = (filterItem) => ({
  type: REMOVE_FILTER,
  data: filterItem
});
