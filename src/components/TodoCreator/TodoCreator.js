import React from 'react';
import {connect} from "react-redux";
import {TextInput} from "../TextInput/TextInput";
import {Button} from "../Button/Button";
import {PLUS} from "../../constants/icons";

import './TodoCreator.css';
import {addTodo} from "../../store";

class TodoCreatorUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: ''
    }
  }

  onInputChange = ({value, name}) => {
    this.setState({[name]: value});
  };

  onAddNewTodoClick = () => {
    this.props.dispatch(addTodo({
      title: this.state.todoTitle
    }));
    this.setState({todoTitle: ''});
  };

  render() {
    return (
      <div className="todo-creator app__width-container">
        <div className="todo-creator__header">
          Add new Todo
        </div>
        <div className="todo-creator__control-container">
          <div className="todo-creator__input-container">
            <TextInput name="todoTitle"
                       value={this.state.todoTitle}
                       onChange={this.onInputChange}
                       width="100%"
            />
          </div>
          <div className="todo-creator__btn-container">
            <Button icon={PLUS} isDisabled={!Boolean(this.state.todoTitle)} onClick={this.onAddNewTodoClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export const TodoCreator = connect()(TodoCreatorUI);
