import React from 'react';
import './TextInput.css';

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
      {Boolean(label) && <div className="text-input__label">{label}</div>}
    </div>
  );
}
