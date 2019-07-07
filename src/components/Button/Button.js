import React from 'react';
import {iconsSrc} from "../../constants/icons";
import classNames from 'class-names';
import './Button.css';

export function Button({
   icon,
   width,
   height,
   theme,
   title,
   isDisabled,
   onClick
}) {
  const styles = {
    width,
    height
  };
  const classes = classNames({
    'button': true,
    [`button-${theme || 'normal'}`]: true,
    'common-border': true,
    'button--disabled': isDisabled
  });
  const noop = () => {};

  const innerBlock = icon ? <img className="button__icon" src={iconsSrc[icon]} alt=""/> : title;

  return (
    <div className={classes} style={styles} onClick={() => isDisabled ? noop() : onClick()}>
      {innerBlock}
    </div>
  );
}
