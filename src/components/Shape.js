import React from 'react';

function Shape (props) {
  const style = {
    backgroundColor: 'blue',
    height: '30px',
    width: '30px'
  };
  
  style.backgroundColor = props.color || 'blue';
  if (props.type == 'circle') {
    style.borderRadius = '999999px';
  }
  if (props.type == 'diamond') {
    style.transform = 'rotateZ(45deg) scale(0.8)';
  }

  return (
    <div style={style} className='shape' />
  );
}


export default Shape;
