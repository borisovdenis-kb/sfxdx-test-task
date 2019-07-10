import React from 'react';
import {connect} from 'react-redux';
import {Todo} from "../Todo/Todo";

import './TodoList.css';

class TodoListUI extends React.Component {
  render() {
    const {todoList, showOnly} = this.props;
    const filteredTodoList = todoList.filter(item => {
      return !showOnly.length || showOnly.indexOf(item.priority) > -1
    });

    return (
      <React.Fragment>
        {Boolean(filteredTodoList.length)
          &&
          <div className="todo-list app__width-container common-border">
            {filteredTodoList.map(todo => (
              <Todo todo={todo} key={todo.id}/>
            ))}
          </div>
        }
      </React.Fragment>
    );
  }
}

export const TodoList = connect(
  state => ({
    todoList: state.todoList.items,
    showOnly: state.todoList.showOnly
  })
)(TodoListUI);
