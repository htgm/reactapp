import React from 'react';

export default (props) => (
  <div className="ButtonPane">
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {props.children}
    </div>
  </div>
);
