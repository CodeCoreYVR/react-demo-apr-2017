import React from 'react';

function Shape (props) {
  return (
    <div style={style} className='shape' />
  );
}

const style = {
  backgroundColor: 'blue',
  height: '30px',
  width: '30px'
};

export default Shape;
