import React from 'react';
import './Label.css';

export function Label({label}) {
  return (
    <React.Fragment>
      {Boolean(label) && <div className="label">{label}</div>}
    </React.Fragment>
  );
}
