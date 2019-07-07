import React from 'react';
import {connect} from 'react-redux';
import {Todo} from "../Todo/Todo";

import './TodoList.css';

class TodoListUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todoList, showOnly} = this.props;
    const filteredTodoList = todoList.filter(item => showOnly.indexOf(item.priority) > -1);

    return (
      <div className="todo-list app__width-container common-border">
        {filteredTodoList.map(todo => (
          <Todo todo={todo} key={todo.id}/>
        ))}
      </div>
    );
  }
}

export const TodoList = connect(
  state => ({
    todoList: state.todoList.items,
    showOnly: state.todoList.showOnly
  })
)(TodoListUI);
