import React from 'react';
import {iconsSrc} from "../../constants/icons";
import classNames from 'class-names';
import './Button.css';

export function Button({icon, width, height, isDisabled, onClick}) {
  const styles = {width, height};
  const classes = classNames({
    'button': true,
    'common-border': true,
    'button--disabled': isDisabled
  });

  return (
    <div className={classes} style={styles} onClick={onClick}>
      <img src={iconsSrc[icon]}/>
    </div>
  );
}
