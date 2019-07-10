import React from 'react';
import classNames from 'class-names';
import {status as statusTypes} from "../../../constants/todo";
import './TodoStatusBadge.css';

export function TodoStatusBadge({status}) {
  const themeMap = {
    [statusTypes.COMPLETED]: 'todo-status-badge--ok',
    [statusTypes.EXPIRED]: 'todo-status-badge--alarm'
  };

  const classes = classNames({
    'todo-status-badge': true,
    [themeMap[status]]: true
  });

  return (
    <div className={classes}>
      {status}
    </div>
  );
}
