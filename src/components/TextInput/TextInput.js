import React from 'react';
import './TextInput.css';
import {Label} from "../Label/Label";

export function TextInput({value, label, name, width, height, onChange}) {
  const styles = {width, height};

  const onInputChange = ({target}) => {
    onChange({
      name,
      value: target.value
    });
  };

  return (
    <div>
      <input className="text-input common-border"
             name={name}
             style={styles}
             type="text"
             value={value}
             onChange={onInputChange}
      />
      <Label label={label} />
    </div>
  );
}
