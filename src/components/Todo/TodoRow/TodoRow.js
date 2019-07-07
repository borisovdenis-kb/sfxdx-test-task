import React from 'react';
import {Checkbox} from "../../Checkbox/Checkbox";
import {Button} from "../../Button/Button";

import './TodoRow.css';

export function TodoRow(props) {
  return (
    <div className="todo">
      <div className="todo__column todo__complete">
        <Checkbox value={props.isCompleted} onClick={props.onCompleteClick}/>
      </div>
      <div className="todo__column todo__title">
        {props.title}
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
