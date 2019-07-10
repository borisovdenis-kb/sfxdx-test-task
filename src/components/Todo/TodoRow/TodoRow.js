import React from 'react';
import {Checkbox} from "../../Checkbox/Checkbox";
import {Button} from "../../Button/Button";
import {status} from "../../../constants/todo";
import {TodoStatusBadge} from "../TodoStatusBadge/TodoStatusBadge";

import './TodoRow.css';

export function TodoRow(props) {
  const todoStatusList = [];

  if (props.completeByDateTime && props.completeByDateTime < new Date()) {
    todoStatusList.push(status.EXPIRED);
  }

  if (props.isCompleted) {
    todoStatusList.push(status.COMPLETED);
  }

  return (
    <div className="todo">
      <div className="todo__column todo__complete">
        <Checkbox value={props.isCompleted} onClick={props.onCompleteClick} />
      </div>
      <div className="todo__column todo__title">
        {props.title}
      </div>
      <div className="todo__column">
        {todoStatusList.map(status => <TodoStatusBadge key={status} status={status}/>)}
      </div>
      <div className="todo__column todo__edit">
        <Button width="25px" height="25px" onClick={props.onEditClick}/>
      </div>
      <div className="todo__column todo__delete">
        <Button width="25px" height="25px" onClick={props.onDeleteClick}/>
      </div>
    </div>
  );
}
