import {ADD_TODO} from "../constants/actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  data: todo
});
