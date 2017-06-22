// Even if we never end up using the React
// object, we must still import if there is JSX on the page
// because JSX tags are converted into React.createElement calls
import React from 'react';
import HelloWorld from './HelloWorld';
import Shape from './Shape';
import OrangeRectangle from './OrangeRectangle';

function App (props) {
  return (
    <div className='app' style={style}>
      <HelloWorld name='Daenerys' />
      <HelloWorld name='Duncan McLeod' />
      <HelloWorld name='Rick' />
      <Shape />
      <OrangeRectangle />
      <Shape color='salmon' />
      <Shape color='aqua' />
      <Shape type='circle' color='violet' />
      <Shape type='diamond' color='maroon' />
    </div>
  ) // make sure to name your components in CamelCase and
  // always call them in JSX as such. Using lower case in
  // JSX will create an HTML tag with that name.
};

const style = {
  margin: '10px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}

export default App;
