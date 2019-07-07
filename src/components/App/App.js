import React from 'react';
import {Header} from "../Header/Header";
import {TodoCreator} from "../TodoCreator/TodoCreator";
import {TodoList} from "../TodoList/TodoList";
import {connect} from 'react-redux';
import {store} from "../../store";

import './App.css';


function AppUI({isTodoListEmpty}) {
  const todoBlock = isTodoListEmpty ? <div className="app__todo-list-empty">There is nothing to do</div> : <TodoList />;

  return (
    <div className="app">
      <Header />
      <div className="app__content-container">
        <TodoCreator />
        {todoBlock}
      </div>
    </div>
  );
}

export const App = connect(
  state => ({
    isTodoListEmpty: !Boolean(store.getState().todoList.items.length)
  })
)(AppUI);
