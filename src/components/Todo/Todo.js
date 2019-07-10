import React from 'react';
import {deleteTodo, updateTodo, setCurrentEditableTodo} from "../../store";
import {connect} from "react-redux";
import {TodoRow} from "./TodoRow/TodoRow";
import {TodoExtendedRow} from "./TodoExtendedRow/TodoExtendedRow";

import './Todo.css';

class TodoUI extends React.Component {
  onCompleteClick = ({value}) => {
    this.props.updateTodo({
      id: this.props.todo.id,
      isCompleted: value
    });
  };

  onEditClick = (toReset) => {
    this.props.setCurrentEditableTodo(toReset ? null : this.props.todo);
  };

  onDeleteClick = () => {
    this.props.deleteTodo(this.props.todo.id);
  };

  onSaveClick = (updatedTodo) => {
    this.props.updateTodo(updatedTodo);
  };

  render() {
    const {currentEditableTodo} = this.props;

    return (
      <React.Fragment>
        {
          currentEditableTodo && currentEditableTodo.id === this.props.todo.id
            ? <TodoExtendedRow todo={this.props.todo}
                               onClose={() => this.onEditClick(true)}
                               onDeleteClick={this.onDeleteClick}
                               onCompleteClick={this.onCompleteClick}
                               onSaveClick={this.onSaveClick}
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
