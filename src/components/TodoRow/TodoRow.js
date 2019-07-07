import React from 'react';
import {Button} from "../Button/Button";
import {Checkbox} from "../Checkbox/Checkbox";
import {updateTodo} from "../../store";

import './TodoRow.css';
import {connect} from "react-redux";

function TodoRowUI(props) {
  const {dispatch} = props;

  const onIsCompletedClick = ({value}) => {
    dispatch(updateTodo({
      id: props.id,
      isCompleted: value
    }));
  };

  return (
    <div className="todo">
      <div className="todo__column todo__complete">
        <Checkbox value={props.isCompleted} onCllick={onIsCompletedClick} />
      </div>
      <div className="todo__column todo__title">
        {props.title}
      </div>
      <div className="todo__column todo__edit">
        <Button width="25px" height="25px" />
      </div>
      <div className="todo__column todo__delete">
        <Button width="25px" height="25px" />
      </div>
    </div>
  );
}

export const TodoRow = connect()(TodoRowUI);
