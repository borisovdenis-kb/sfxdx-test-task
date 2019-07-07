import React from 'react';
import _ from 'lodash';
import {TextInput} from "../../TextInput/TextInput";
import {Button} from "../../Button/Button";
import {priority} from "../../../constants/todo";
import {DateTimePicker} from "../../DateTimePicker/DateTimePicker";

import 'flatpickr/dist/themes/material_blue.css'
import './TodoExtendedRow.css';


export class TodoExtendedRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: '',
      description: '',
      priority: priority.ORDINARY,
      isCompleted: false,
      isDateRequired: false,
      completeByDateTime: null,
      completedDateTime: null
    };
  }

  componentDidMount() {
    this.setState(this.props.todo);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!_.isEqual(prevProps.todo, this.props.todo)) {
      this.setState(this.props.todo);
    }
  }

  onDataChange = ({name, value}) => {
    this.setState({
      [name]: value
    });
  };

  onCompleteClick = () => {
    this.props.onCompleteClick({value: !this.state.isCompleted});
  };

  render() {
    return (
      <div className="todo-extended">
        <div className="todo-extended__top-wrap">
          {this.state.isCompleted && <div className="todo-extended__content-cover">Completed</div>}

          <div className="todo-extended__header">
            <div className="todo-extended__header-close-btn" onClick={this.props.onClose}>✖</div>
          </div>
          <div className="todo-extended__content">
            <div className="todo-extended__content-row">
              <TextInput name="title"
                         label="Title"
                         height="30px"
                         value={this.state.title}
                         onChange={this.onDataChange}
              />
            </div>
            <div className="todo-extended__content-row">
              <TextInput name="description"
                         label="Description"
                         height="30px"
                         value={this.state.description}
                         onChange={this.onDataChange}
              />
            </div>
            <div className="todo-extended__content-row">
              <DateTimePicker height="30px"
                              label="Complete Before Date"
                              value={this.state.completeByDateTime}
                              onChange={this.onDataChange}
              />
            </div>
          </div>
        </div>
        <div className="todo-extended__footer">
          <div className="todo-extended__footer-left">
            <Button title={this.state.isCompleted ? 'Open' : 'Complete'}
                    width="100px"
                    onClick={this.onCompleteClick}
            />
          </div>
          <div className="todo-extended__footer-right">
            <div className="todo-extended__footer-save-btn">
              <Button title="Save"
                      theme="ok"
                      width="100px"
                      isDisabled={_.isEqual(this.props.todo, this.state)}
                      onClick={() => this.props.onSaveClick(this.state)}
              />
            </div>
            <Button title="Delete"
                    theme="alert"
                    width="100px"
                    onClick={this.props.onDeleteClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
