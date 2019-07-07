import React from 'react';
import {iconsSrc} from "../../constants/icons";
import './Checkbox.css';

export function Checkbox({value, name, onCllick}) {
  const onCheckClick = () => {
    onCllick({
      name,
      value: !value
    });
  };

  return (
    <div className="checkbox common-border" onClick={onCheckClick}>
      {Boolean(value) && <img className="checkbox__icon" src={iconsSrc.CHECK} alt=""/>}
    </div>
  );
}
