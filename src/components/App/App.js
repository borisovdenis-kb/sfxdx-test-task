import React from 'react';
import {Header} from "../Header/Header";
import {TodoCreator} from "../TodoCreator/TodoCreator";
import {Provider} from 'react-redux';
import {store} from "../../store";

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="app__content-container">
          <TodoCreator />
        </div>
      </div>
    </Provider>
  );
}

export default App;
