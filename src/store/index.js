import { createStore } from "redux";
import { rootReducer } from "./reducers";

const state = JSON.parse(localStorage.getItem('todoList'));

export const store = createStore(
  rootReducer,
  state || {}
);

store.subscribe(() => {
  localStorage.setItem('todoList', JSON.stringify(store.getState()));
});

export * from './reducers';
export * from './actions';
