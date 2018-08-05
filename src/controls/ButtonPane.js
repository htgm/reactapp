import React from 'react';

export default (props) => (
  <div className="ButtonPane">
    <div style={{ display: 'inline-block' }}>
      {props.children}
    </div>
  </div>
);
