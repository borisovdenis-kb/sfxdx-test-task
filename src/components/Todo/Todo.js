import React from 'react';
import {deleteTodo, updateTodo} from "../../store";
import {connect} from "react-redux";
import {TodoRow} from "./TodoRow/TodoRow";
import {TodoExtendedRow} from "./TodoExtendedRow/TodoExtendedRow";

import './Todo.css';

class TodoUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false
    }
  }

  onCompleteClick = ({value}) => {
    this.props.dispatch(updateTodo({
      id: this.props.todo.id,
      isCompleted: value
    }));
  };

  onEditClick = () => {
    this.setState(state => ({isEditMode: !state.isEditMode}));
  };

  onDeleteClick = () => {
    this.props.dispatch(deleteTodo({id: this.props.todo.id}));
  };

  render() {
    return (
      <React.Fragment>
        {
          this.state.isEditMode
            ? <TodoExtendedRow todo={this.props.todo}
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

export const Todo = connect()(TodoUI);
