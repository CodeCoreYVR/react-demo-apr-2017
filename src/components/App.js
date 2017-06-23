// Even if we never end up using the React
// object, we must still import if there is JSX on the page
// because JSX tags are converted into React.createElement calls
import React from 'react';
import HelloWorld from './HelloWorld';
import Shape from './Shape';
import OrangeRectangle from './OrangeRectangle';
import Greetings from './Greetings';
import GuestBook from './GuestBook';
import Search from './Search';

const entries = [
  {name: 'Jon Snow', body: 'Winter has come.', date: new Date()}
];

function App (props) {
  return (
    <div className='app' style={style}>
      <Search values={['Chris', 'Carlo', 'Inge', 'Celina']} />
      <GuestBook entries={entries} />
      <HelloWorld name='Daenerys' />
      <HelloWorld name='Duncan McLeod' />
      <HelloWorld name='Rick' />
      <Shape />
      <OrangeRectangle />
      <Shape color='salmon' />
      <Shape color='aqua' />
      <Shape type='circle' color='violet' />
      <Shape type='diamond' color='maroon' />
      <HelloWorld isBye name='Margaery Tyrell' />
      <Greetings names={['Chris', 'Carlo', 'Inge', 'Celina', 'John']} />
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
