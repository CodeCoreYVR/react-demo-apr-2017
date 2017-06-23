import React from 'react';
import Shape from './Shape';

function OrangeRectangle (props) {
  return (
    <div style={style} className='orange-rectangle'>
      <Shape />
      <Shape />
      <Shape />
    </div>
  )
}

const style = {
  backgroundColor: 'orange',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: `${30 + 2 * 10}px`,
  width: `${30 * 3 + 4 * 10}px`
}

export default OrangeRectangle;
