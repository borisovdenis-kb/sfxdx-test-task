import React from 'react';
import {deleteTodo, updateTodo, setCurrentEditableTodo} from "../../store";
import {connect} from "react-redux";
import {TodoRow} from "./TodoRow/TodoRow";
import {TodoExtendedRow} from "./TodoExtendedRow/TodoExtendedRow";

import './Todo.css';

class TodoUI extends React.Component {
  constructor(props) {
    super(props);
  }

  onCompleteClick = ({value}) => {
    this.props.updateTodo({
      id: this.props.todo.id,
      isCompleted: value
    });
  };

  onEditClick = () => {
    this.props.setCurrentEditableTodo(this.props.todo);
  };

  onDeleteClick = () => {
    this.props.deleteTodo({id: this.props.todo.id});
  };

  onClose = () => {
    this.props.setCurrentEditableTodo(null);
  };

  render() {
    const {currentEditableTodo} = this.props;

    return (
      <React.Fragment>
        {
          currentEditableTodo && currentEditableTodo.id === this.props.todo.id
            ? <TodoExtendedRow todo={this.props.todo}
                               onClose={this.onClose}
                               onCompleteClick={this.onCompleteClick}
                               onEditClick={this.onEditClick}
              />
            : <TodoRow {...this.props.todo}
                       onCompleteClick={this.onCompleteClick}
                       onEditClick={this.onEditClick}
                       onDeleteClick={this.onDeleteClick}
              />
        }
      </React.Fragment>
    );
  }
}

export const Todo = connect(
  state => ({
    currentEditableTodo: state.todoList.currentEditableTodo
  }),
  dispatch => ({
    updateTodo: (id, isCompleted) => dispatch(updateTodo(id, isCompleted)),
    deleteTodo: (id) => dispatch(deleteTodo({id})),
    setCurrentEditableTodo: (todo) => dispatch(setCurrentEditableTodo(todo))
  })
)(TodoUI);
