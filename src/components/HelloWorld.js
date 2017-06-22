import React from 'react';

// Regular export must imported by using braces as follows:
// import { HelloWorld } from './HelloWorld';
export function HelloWorld (props) {
  const style = {
    color: 'deepskyblue',
    backgroundColor: 'whitesmoke',
    borderRadius: '3px',
    padding: '2px'
  }
  return (
    <p style={style}>Hello {props.name}!</p>
  );
}
// Default exports can be imported without braces, and
// there can only be one default export like Highlanders
// import HelloWorld from './HelloWorld'
export default HelloWorld;
