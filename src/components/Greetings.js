import React from 'react';
import HelloWorld from './HelloWorld';

function Greetings (props) {
  const {names = []} = props;

  const helloWorlds = names.map(
    name => <HelloWorld name={name} />
  );

  return (
    <div
      style={{
        border: 'thin solid grey',
        padding: '5px'
      }}
      className='greetings'>
      <h2>Greetings!</h2>
      { helloWorlds }
    </div>
  )
}

export default Greetings;
