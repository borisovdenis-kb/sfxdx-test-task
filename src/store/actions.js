import {ADD_TODO, UPDATE_TODO} from "../constants/actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  data: todo
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  data: todo
});
