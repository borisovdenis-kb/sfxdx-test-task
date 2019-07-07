import React from 'react';
import './TextInput.css';

export function TextInput({value, onChange, name, width, height}) {
  const styles = {width, height};

  const onInputChange = ({target}) => {
    onChange({
      name,
      value: target.value
    });
  };

  return (
    <input className="text-input common-border"
           name={name}
           style={styles}
           type="text"
           value={value}
           onChange={onInputChange}
    />
  );
}
