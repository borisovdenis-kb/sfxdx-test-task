import React from 'react';
import Flatpickr from 'react-flatpickr';

import './DateTimePicker.css';
import {Label} from "../Label/Label";

export class DateTimePicker extends React.Component {
  componentDidMount() {
    const dateTimeInput = document.getElementsByClassName('flatpickr-input')[0];
    dateTimeInput.className += ' data-time-picker common-border';
    dateTimeInput.style.width = this.props.width;
    dateTimeInput.style.height = this.props.height;
  }

  render() {
    const {value, label, onChange} = this.props;

    const disableDate = (date) => {
      return date < new Date();
    };

    return (
      <div>
        <Flatpickr data-enable-time
                   options={{disable: [disableDate]}}
                   value={value}
                   onChange={date => { onChange({name: 'completeByDateTime', value: date}) }}
        />
        <Label label={label}/>
      </div>
    );
  }
}
