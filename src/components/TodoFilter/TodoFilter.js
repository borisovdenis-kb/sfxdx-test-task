import React from 'react';
import {priority} from "../../constants/todo";
import classNames from 'class-names';
import './TodoFilter.css';
import {connect} from "react-redux";
import {addFilter, removeFilter} from "../../store";

const filterItems = [
  {priority: priority.ORDINARY, name: 'ordinary'},
  {priority: priority.IMPORTANT, name: 'important'},
  {priority: priority.VERY_IMPORTANT, name: 'very important'}
];

export class TodoFilterUI extends React.Component {
  getFilterItemClasses = (item) => {
    return classNames({
      'todo-filter__item': true,
      'todo-filter__item--selected': this.checkPriorityFilterEnabled(item.priority)
    });
  };

  onFilterItemClick = (priority) => {
    if (this.checkPriorityFilterEnabled(priority)) {
      this.props.removeFilter(priority);
    } else {
      this.props.addFilter(priority);
    }
  };

  checkPriorityFilterEnabled = (priority) => {
    return this.props.showOnly.indexOf(priority) > -1;
  };

  render() {
    return (
      <div className="todo-filter app__width-container">
        {filterItems.map(item => (
          <div key={item.priority}
               className={this.getFilterItemClasses(item)}
               onClick={() => {
                 this.onFilterItemClick(item.priority)
               }}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export const TodoFilter = connect(
  state => ({
    showOnly: state.todoList.showOnly
  }),
  dispatch => ({
    addFilter: (filterItem) => dispatch(addFilter(filterItem)),
    removeFilter: (filterItem) => dispatch(removeFilter(filterItem))
  })
)(TodoFilterUI);
